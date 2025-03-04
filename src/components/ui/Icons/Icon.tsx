import Plus from "./svg/plus.svg";
import PulseNotification from "./svg/active.svg";
import SoundbaseLogo from "./svg/soundbase.svg";
import ArtamedicusLogo from "./svg/artamedicus.svg";
import ZenguardAI from "./svg/zenguardai.svg";

export const icons = {
  Plus,
  PulseNotification,
  SoundbaseLogo,
  ArtamedicusLogo,
  ZenguardAI,
};

export type IconName = keyof typeof icons;

export interface IIconProps {
  name: IconName;
  [key: string]: any;
}

const Icon = ({ name, ...props }: IIconProps) => {
  const SelectedIcon = icons[name];

  return <SelectedIcon {...props} />;
};
export default Icon;
