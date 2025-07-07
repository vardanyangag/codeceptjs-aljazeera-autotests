#!/bin/bash

# Test Execution Script for CodeceptJS
# Usage: ./scripts/run-tests.sh [tag-pattern]

# Default to running all tests if no tag pattern provided
TAG_PATTERN=${1:-""}

# Function to run tests with tag pattern
run_tests() {
    local pattern=$1
    local description=$2
    
    echo "🚀 Running tests: $description"
    echo "📋 Tag pattern: $pattern"
    echo "⏰ Started at: $(date)"
    echo "----------------------------------------"
    
    if [ -z "$pattern" ]; then
        npx ts-node --esm ./node_modules/.bin/codeceptjs run --features
    else
        npx ts-node --esm ./node_modules/.bin/codeceptjs run --features --grep "$pattern"
    fi
    
    echo "----------------------------------------"
    echo "✅ Completed at: $(date)"
    echo ""
}

# Function to show available tag patterns
show_help() {
    echo "📋 Available Test Execution Options:"
    echo ""
    echo "🔧 Quick Commands:"
    echo "  ./scripts/run-tests.sh                    # Run all tests"
    echo "  ./scripts/run-tests.sh @smoke             # Run smoke tests only"
    echo "  ./scripts/run-tests.sh @desktop           # Run desktop tests only"
    echo "  ./scripts/run-tests.sh @mobile            # Run mobile tests only"
    echo "  ./scripts/run-tests.sh @critical          # Run critical tests only"
    echo ""
    echo "🎯 Specific Combinations:"
    echo "  ./scripts/run-tests.sh @desktop.*@smoke   # Desktop smoke tests"
    echo "  ./scripts/run-tests.sh @mobile.*@regression # Mobile regression tests"
    echo "  ./scripts/run-tests.sh @accessibility     # Accessibility tests"
    echo "  ./scripts/run-tests.sh @main-page         # Main page tests"
    echo "  ./scripts/run-tests.sh @live-page         # Live page tests"
    echo ""
    echo "📊 Test Categories:"
    echo "  Device: @desktop, @mobile"
    echo "  Type: @smoke, @regression, @ui, @accessibility"
    echo "  Feature: @main-page, @live-page"
    echo "  Priority: @critical"
    echo ""
}

# Check if help is requested
if [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
    show_help
    exit 0
fi

# Run tests with provided pattern
run_tests "$TAG_PATTERN" "${2:-"All tests"}" 