export const focusElement = {
  inserted: el => {
    el.focus()
  }
}

// Directive to Focus an element, but only if a child does not have focus
export const focusParentLast = {
  inserted: el => {
    if (!el.contains(document.activeElement)) {
      el.focus()
    }
  }
}

export const tooltipStyles = {
  update: function(el) {
    el.style.display = "inline-block"
    el.style.userSelect = "none"
  }
}
