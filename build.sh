#!/bin/bash
set -e

echo "Starting build process..."
echo "Current directory: $(pwd)"
echo "Listing current directory contents:"
ls -la

echo "Running npm build..."
npm run build

echo "Checking for 'out' directory..."
if [ -d "out" ]; then
    echo "'out' directory exists. Moving to 'dist'..."
    rm -rf dist
    mv out dist
    echo "Contents of dist directory:"
    ls -la dist
else
    echo "Error: 'out' directory not found!"
    echo "Current directory contents:"
    ls -la
    exit 1
fi 