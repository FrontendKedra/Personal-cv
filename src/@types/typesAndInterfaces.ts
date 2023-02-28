export type Lists = {
  content: string;
  id: number;
};

export interface SkillSetProps {
  title: string;
  titleIcon: JSX.Element;
  itemsList: Lists[];
  ellipse: string;
}