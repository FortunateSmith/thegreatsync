function elementIsVisibleInViewport(element) {
  const { top, left, bottom, right } = element.getBoundingClientRect();

  /**
   * rectangle is visible
   * if top and left values are greater than or equal to zero
   * and if bottom value is less than screen height
   * and if right val  is less than screen width
   *  */

  const isTopInsideViewport = top >= 0;
  const isLeftpInsideViewport = left >= 0;
  const isBottomInsideViewport = bottom <= window.innerHeight;
  const isRightInsideViewport = right <= window.innerWidth;

  const isInsideViewport =
    isTopInsideViewport &&
    isLeftpInsideViewport &&
    isBottomInsideViewport &&
    isRightInsideViewport;

  return isInsideViewport;
}
