# PowerShell script to set up environment variables
# This script creates .env.local from .env.local.example

Write-Host "Setting up environment variables..." -ForegroundColor Green

# Check if .env.local already exists
if (Test-Path ".env.local") {
    Write-Host ".env.local already exists. Backing up to .env.local.backup..." -ForegroundColor Yellow
    Copy-Item ".env.local" ".env.local.backup" -Force
}

# Copy example file to .env.local
if (Test-Path ".env.local.example") {
    Copy-Item ".env.local.example" ".env.local" -Force
    Write-Host "✓ Created .env.local from .env.local.example" -ForegroundColor Green
    Write-Host ""
    Write-Host "Environment variables configured:" -ForegroundColor Cyan
    Write-Host "  API_BASE_URL: https://api.echoreads.online/api/v1" -ForegroundColor White
    Write-Host "  ENABLE_DEMO_MODE: false" -ForegroundColor White
    Write-Host "  NEXT_PUBLIC_APP_URL: http://localhost:3000" -ForegroundColor White
    Write-Host ""
    Write-Host "You can edit .env.local to change these values if needed." -ForegroundColor Yellow
} else {
    Write-Host "✗ Error: .env.local.example not found!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Setup complete! You can now run 'npm run dev' to start the development server." -ForegroundColor Green

