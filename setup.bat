@echo off
REM Business Volunteers Website - Setup & Run Guide for Windows

echo 🚀 Business Volunteers Website Setup
echo ======================================

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js version: %NODE_VERSION%
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install
echo ✅ Dependencies installed
echo.

REM Check environment variables
if not exist .env.local (
    echo ⚠️  .env.local not found!
    echo Creating .env.local...
    (
        echo RESEND_API_KEY=re_LL69nLdt_66Hz3NTEjfNcpojsUD4tAT4C
        echo NEXT_PUBLIC_SITE_URL=https://businessvolunteers.online
    ) > .env.local
    echo ✅ .env.local created with default values
)
echo.

REM Build the project
echo 🔨 Building the project...
call npm run build

if %ERRORLEVEL% equ 0 (
    echo ✅ Build successful!
    echo.
    echo 🎉 Setup complete!
    echo.
    echo To run the development server:
    echo   npm run dev
    echo.
    echo To start the production server:
    echo   npm start
    echo.
    echo 📖 For more information, see README.md
) else (
    echo ❌ Build failed. Please check the errors above.
    exit /b 1
)
