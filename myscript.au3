#include <FileConstants.au3>
#include <MsgBoxConstants.au3>
#include <WinAPIFiles.au3>
#include <File.au3>

Local $sFolderPath = "D:\TestPDF_Files"
Local $sSaveFolderPath = "D:\TestPDF_FIles_Copied"

; Check if the folder exists
If Not FileExists($sFolderPath) Then
    MsgBox($MB_OK, "Error", "Folder not found!")
    Exit
EndIf

; Get list of files in the folder
Local $aFileList = _FileListToArray($sFolderPath, "*", $FLTA_FILES)

If @error Then
    MsgBox($MB_OK, "Error", "Error occurred while listing files.")
    Exit
EndIf

; Loop through each file
For $i = 1 To $aFileList[0]
    Local $sFileName = $aFileList[$i]

    ; Open the file
    ShellExecute($sFolderPath & "\" & $sFileName)

    ; Wait for the file to open (adjust the sleep time according to your need)
    Sleep(2000)

    
    ; Here you can automate the save as dialog based on your application

    Send("!f") ; Opens the File menu
 Sleep(2000) ; Wait for the save dialog to appear

    Send("a")  ; Sends "a" to select "Save As" (assuming "a" is the shortcut key for "Save As" in your application)
    Sleep(2000) ; Wait for the save dialog to appear
    Send("{TAB 4}")  
 Sleep(1000) ; Wait for the save dialog to appear
  
    ; Confirm the save
    Send("{ENTER}")
    Sleep(1000) ; Wait for save to complete
; Send the name of the file
Send($sSaveFolderPath & "\" & $sFileName)
    Send("{ENTER}")
    Sleep(2000) ; Wait for save to complete
    ; Close the file (optional)
    Send("^w") ; Ctrl + W

    Sleep(1000) ; Wait for next file
Next
