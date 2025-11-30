#!/bin/bash

# ViralDrip.ai Deployment Helper Script
# This script makes it easy to commit and push changes to GitHub (which auto-deploys to Vercel)

echo "🚀 ViralDrip.ai Deployment Helper"
echo "================================"
echo ""

# Check if there are any changes
if [[ -z $(git status -s) ]]; then
    echo "✅ No changes to commit. Everything is up to date!"
    exit 0
fi

# Show what changed
echo "📝 Changes detected:"
git status -s
echo ""

# Ask for commit message
echo "💬 Enter a commit message (or press Enter for default):"
read -r commit_message

# Use default message if none provided
if [[ -z "$commit_message" ]]; then
    commit_message="Update website content"
fi

echo ""
echo "⏳ Committing changes..."

# Add all changes
git add .

# Commit with message
git commit -m "$commit_message

🤖 Deployed via helper script"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push

echo ""
echo "✅ Done! Your changes are pushed to GitHub."
echo "🌐 Vercel will automatically deploy in 1-2 minutes."
echo "📊 Check deployment status: https://vercel.com/dashboard"
echo ""
