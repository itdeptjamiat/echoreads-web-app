# PowerShell script to clear Next.js cache
Write-Host "Clearing Next.js cache..." -ForegroundColor Cyan

# Remove .next folder
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
    Write-Host "✓ Removed .next folder" -ForegroundColor Green
} else {
    Write-Host "⚠ .next folder not found" -ForegroundColor Yellow
}

# Remove node_modules/.cache if exists
if (Test-Path "node_modules\.cache") {
    Remove-Item -Recurse -Force "node_modules\.cache"
    Write-Host "✓ Removed node_modules/.cache" -ForegroundColor Green
}

Write-Host ""
Write-Host "Cache cleared successfully!" -ForegroundColor Green
Write-Host "Now run: npm run dev" -ForegroundColor Cyan

