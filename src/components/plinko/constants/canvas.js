export const ROW_ADJUSTMENT = .9;
export const COL_ADJUSTMENT = .8;

export const CANVAS = {
  WIDTH: 760,
  HEIGHT: 570,
  FILL:'rgba(18, 34, 46, 1)'
}
export const ROWS = 16;
export const COLS = ROWS + 2
export const ROW_SPACING = CANVAS.HEIGHT / ROWS * ROW_ADJUSTMENT;
export const COL_SPACING = CANVAS.WIDTH / COLS * COL_ADJUSTMENT;

// leave extra space at top of frame to drop chips
export const VERTICAL_MARGIN = ROW_SPACING * 1.5;
// offset columns in odd rows by half
export const HORIZONTAL_OFFSET = COL_SPACING / 2;
