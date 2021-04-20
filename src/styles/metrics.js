import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');

const wp = widthPercent => {
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100,
  );
  return screenPixel;
};

const hp = heightPercent => {
  const screenPixel = PixelRatio.roundToNearestPixel(
    (height * parseFloat(heightPercent)) / 100,
  );
  return screenPixel;
};

const figmaWidth = 375;

const px = valuePx => {
  const widthPercent = (valuePx / figmaWidth) * 100;
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100,
  );
  return screenPixel;
};

export const metrics = {
  wp,
  hp,
  px,
  baseWidth: `${px(328)}`,
};
