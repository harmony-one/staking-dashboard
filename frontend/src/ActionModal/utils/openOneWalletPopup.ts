const popupCenter = (url: string, title: string, w: number, h: number) => {
  const left = (screen.width - w) / 2
  const top = (screen.height - h) / 2
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

export const openOneWalletPopup = (
  extensionId: string,
  w: number,
  h: number
) => {
  const url = `chrome-extension://${extensionId}/popup.html`

  popupCenter(url, "Harmony-One Wallet Extension", w, h)
}

// let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=400,height=600,left=100,top=100`
