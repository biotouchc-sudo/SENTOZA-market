#!/bin/bash
# scripts/snapshot.sh
# Creates a Git snapshot before dangerous operations

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BRANCH_NAME="snapshot/auto_$TIMESTAMP"

echo "📸 Creating snapshot branch: $BRANCH_NAME"

# Create snapshot branch
git branch "$BRANCH_NAME"

if [ $? -eq 0 ]; then
  echo "✅ Snapshot created successfully: $BRANCH_NAME"
  echo "   To rollback: git checkout $BRANCH_NAME"
else
  echo "❌ Failed to create snapshot"
  exit 1
fi
