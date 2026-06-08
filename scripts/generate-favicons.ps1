Add-Type -AssemblyName System.Drawing

$srcPath = Join-Path $PSScriptRoot "..\public\images\sections\CM alta .png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$bg = [System.Drawing.Color]::FromArgb(255, 8, 7, 30)

function Save-Icon {
    param(
        [int]$Size,
        [string]$Path,
        [double]$PaddingRatio
    )

    $bmp = New-Object System.Drawing.Bitmap $Size, $Size
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear($bg)

    $pad = [math]::Round($Size * $PaddingRatio)
    $inner = $Size - (2 * $pad)
    $g.DrawImage($src, $pad, $pad, $inner, $inner)
    $g.Dispose()

    $dir = Split-Path $Path -Parent
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }

    $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Write-Output "Saved $Path (${Size}px, padding ${PaddingRatio})"
}

$root = Join-Path $PSScriptRoot ".."

Save-Icon -Size 512 -Path (Join-Path $root "src\app\icon.png") -PaddingRatio 0.05
Save-Icon -Size 180 -Path (Join-Path $root "src\app\apple-icon.png") -PaddingRatio 0.06
Save-Icon -Size 48 -Path (Join-Path $root "public\favicon-48.png") -PaddingRatio 0.04
Save-Icon -Size 32 -Path (Join-Path $root "public\favicon-32.png") -PaddingRatio 0.03
Save-Icon -Size 16 -Path (Join-Path $root "public\favicon-16.png") -PaddingRatio 0.02

$src.Dispose()
