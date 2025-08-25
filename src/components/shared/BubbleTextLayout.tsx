type FigmaRect = { left: number; top: number; width: number; height: number };
type FigmaFrame = { width: number; height: number };

// 피그마 Rect 변환 함수
const formatFigmaRectStyle = (rect: FigmaRect, frame: FigmaFrame) => ({
  left: `${(rect.left / frame.width) * 100}%`,
  top: `${(rect.top / frame.height) * 100}%`,
  width: `${(rect.width / frame.width) * 100}%`,
  height: `${(rect.height / frame.height) * 100}%`,
});

interface BubbleTextProps {
  children: React.ReactNode;
  figmaRect: FigmaRect;
  figmaFrame: FigmaFrame;
}

export default function BubbleTextLayout({ children, figmaRect, figmaFrame }: BubbleTextProps) {
  const rectStyle = formatFigmaRectStyle(figmaRect, figmaFrame); // 변환된 피그마 Rect 스타일값
  return (
    <div className="absolute" style={rectStyle}>
      {children}
    </div>
  );
}
