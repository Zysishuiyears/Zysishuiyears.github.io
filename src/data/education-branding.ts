import nankaiLogo from '../assets/education/nankai-logo.png';
import oucLogo from '../assets/education/ouc-logo.png';

export const educationLogos = {
	nankai: nankaiLogo,
	ouc: oucLogo,
} as const;

export type EducationSlug = keyof typeof educationLogos;
