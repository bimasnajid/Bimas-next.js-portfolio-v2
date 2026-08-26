import * as React from "react";

export interface VerticalTimelineProps {
  children?: React.ReactNode; // ✅ tambahkan ini
  animate?: boolean;
  className?: string;
  layout?: "1-column" | "2-columns";
  lineColor?: string;
}

export interface VerticalTimelineElementProps {
  children?: React.ReactNode; // ✅ tambahkan ini
  className?: string;
  contentStyle?: React.CSSProperties;
  contentArrowStyle?: React.CSSProperties;
  date?: string;
  dateClassName?: string;
  iconStyle?: React.CSSProperties;
  icon?: React.ReactNode;
  iconOnClick?: () => void;
  position?: "left" | "right";
  style?: React.CSSProperties;
}

export class VerticalTimeline extends React.Component<VerticalTimelineProps> {}
export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> {}

declare module "react-vertical-timeline-component/style.min.css";
