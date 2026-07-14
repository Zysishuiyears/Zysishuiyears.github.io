import nankaiLogo from '../assets/education/nankai-logo.svg';
import oucLogo from '../assets/education/ouc-logo.svg';

export const educationLogos = {
	nankai: nankaiLogo,
	ouc: oucLogo,
} as const;

export type EducationSlug = keyof typeof educationLogos;
