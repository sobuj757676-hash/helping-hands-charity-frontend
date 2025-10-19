#!/bin/bash

# This script fixes the Next.js routing conflicts by renaming page implementations
# and correcting the relative import paths in the (site) route group.

# Step 1: Rename all conflicting page.tsx files to page-impl.tsx
# We find all page.tsx files that are NOT in the src/app/(site) directory
# and rename them to page-impl.tsx in their respective directories.
find src/app -mindepth 2 -name "page.tsx" -not -path "src/app/(site)/*" -execdir mv {} page-impl.tsx \;
# Also handle the root page.tsx
if [ -f "src/app/page.tsx" ]; then
    mv "src/app/page.tsx" "src/app/page-impl.tsx"
fi


# Step 2: Fix the import paths in the src/app/(site) directory
# We find all page.tsx files within src/app/(site) and update their import paths.
find 'src/app/(site)' -name "page.tsx" | while read -r file; do
  # Calculate the directory depth relative to 'src/app/(site)'
  relative_path_to_file=${file#src/app/(site)/}
  depth=$(echo "$relative_path_to_file" | grep -o / | wc -l)

  # Construct the correct relative path prefix (e.g., ../, ../../)
  prefix=""
  # The prefix needs to go up one level from src/app/(site) to src/app, plus the depth
  for ((i=0; i<=depth; i++)); do
    prefix+="../"
  done

  # Extract the module path from the original import statement.
  # e.g., from 'export { default } from '../about/page'' we get 'about/page'
  original_module_path=$(grep -o "from '[^']*'" "$file" | sed "s/from '\.\.\/\(.*\)'/\1/")

  # Construct the new import path
  new_import_path="${prefix}${original_module_path}-impl"

  # Replace the old import statement with the new one in the file
  sed -i "s|from '[^']*'|from '$new_import_path'|" "$file"
done

echo "Script execution finished."
