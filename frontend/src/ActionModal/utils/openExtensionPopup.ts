const popupCenter = (url: string, title: string, w: number, h: number) => {
  const left = screen.width / 2 - w / 2
  const top = screen.height / 2 - h / 2

  return window.open(
    url,
    title,
    [
      "toolbar=no",
      "location=no",
      "directories=no",
      "status=no",
      "menubar=no",
      "scrollbars=no",
      "resizable=no",
      "copyhistory=no",
      "width=" + w,
      "height=" + h,
      "top=" + top,
      "left=" + left
    ].join(",")
  )
}

export const openExtensionPopup = (extensionId: string) => {
  const url = `chrome-extension://${extensionId}/assets/popup.html`

  popupCenter(url, "Harmony extension", 400, 580)
}

// let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=400,height=600,left=100,top=100`
