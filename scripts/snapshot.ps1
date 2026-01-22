# scripts/snapshot.ps1
# Creates a Git snapshot before dangerous operations (Windows)

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$branchName = "snapshot/auto_$timestamp"

Write-Host "📸 Creating snapshot branch: $branchName" -ForegroundColor Cyan

git branch $branchName

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Snapshot created successfully: $branchName" -ForegroundColor Green
    Write-Host "   To rollback: git checkout $branchName" -ForegroundColor Yellow
} else {
    Write-Host "❌ Failed to create snapshot" -ForegroundColor Red
    exit 1
}
