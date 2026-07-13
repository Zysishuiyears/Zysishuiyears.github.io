import type { Locale } from './site';

type Localized<T> = Record<Locale, T>;

export interface EducationExperience {
	role: Localized<string>;
	period: Localized<string>;
	details: Localized<readonly string[]>;
}

export interface EducationSection {
	title: Localized<string>;
	body?: Localized<string>;
	items?: Localized<readonly string[]>;
	experiences?: readonly EducationExperience[];
}

export interface EducationProfile {
	slug: string;
	institution: Localized<string>;
	school: Localized<string>;
	degree: Localized<string>;
	period: Localized<string>;
	location: Localized<string>;
	summary: Localized<string>;
	tags: Localized<readonly string[]>;
	advisor?: {
		label: Localized<string>;
		url: string;
	};
	sections: readonly EducationSection[];
}

export const educationProfiles = [
	{
		slug: 'nankai',
		institution: { zh: '南开大学', en: 'Nankai University' },
		school: { zh: '数学科学学院', en: 'School of Mathematical Sciences' },
		degree: { zh: '应用数学硕士', en: 'M.S. in Applied Mathematics' },
		period: { zh: '2025.09 – 2028.06（预计）', en: 'Sep. 2025 – Jun. 2028 (expected)' },
		location: { zh: '天津', en: 'Tianjin' },
		summary: {
			zh: '保研录取，研究方向为图论与组合优化，当前主要关注结构图论、图染色以及平面图与特殊图类上的 B-coloring 问题。',
			en: 'Admitted through graduate recommendation, with a research focus on graph theory and combinatorial optimization, particularly structural graph theory, graph coloring, and B-coloring on planar and other special graph classes.',
		},
		tags: {
			zh: ['图论与组合优化', '硕士研究生'],
			en: ['Graph Theory and Combinatorial Optimization', 'M.S. student'],
		},
		advisor: {
			label: { zh: '导师：李佳傲教授', en: 'Advisor: Prof. Jiaao Li' },
			url: 'https://www.lijiaao-dm-nk.com/',
		},
		sections: [
			{
				title: { zh: '主修课程', en: 'Major coursework' },
				items: {
					zh: ['图论', '构造组合学', '深度学习', '泛函分析', '测度论与概率论基础'],
					en: ['Graph Theory', 'Constructive Combinatorics', 'Deep Learning', 'Functional Analysis', 'Foundations of Measure Theory and Probability'],
				},
			},
			{
				title: { zh: '学生工作与教学实践', en: 'Student service and teaching practice' },
				experiences: [
					{
						role: { zh: '数学科学学院“数学建模”课程助教', en: 'Teaching Assistant, Mathematical Modeling' },
						period: { zh: '2026 年春季学期', en: 'Spring 2026' },
						details: {
							zh: ['担任数学科学学院专业选修课“数学建模”课程助教，协助课程教学与日常教学支持。'],
							en: ['Serve as a teaching assistant for the School of Mathematical Sciences elective Mathematical Modeling, supporting course instruction and routine teaching activities.'],
						},
					},
					{
						role: { zh: '南开大学数学建模协会常务理事会成员、教练员', en: 'Executive Council Member and Coach, Nankai Mathematical Modeling Association' },
						period: { zh: '2025.09 – 至今', en: 'Sep. 2025 – Present' },
						details: {
							zh: [
								'参与协会核心工作决策、校外合作指导任务与数学建模校队培训。',
								'以选派指导员身份参与第九届全军数学建模竞赛队伍指导，协助模型设计、编程实践以及报告撰写与修改。',
								'负责数学建模校队“图模型与图算法”章节培训。',
							],
							en: [
								'Contribute to core activity decisions, external collaborative mentoring, and training for the university mathematical modeling team.',
								'Served as an appointed instructor for a team in the 9th All-Army Mathematical Modeling Competition, supporting model design, programming, and report drafting and revision.',
								'Delivered training on graph models and graph algorithms for the university mathematical modeling team.',
							],
						},
					},
				],
			},
		],
	},
	{
		slug: 'ouc',
		institution: { zh: '中国海洋大学', en: 'Ocean University of China' },
		school: { zh: '数学科学学院', en: 'School of Mathematical Sciences' },
		degree: { zh: '数学与应用数学 · 理学荣誉学士', en: 'Mathematics and Applied Mathematics · Honorary B.S.' },
		period: { zh: '2021.09 – 2025.06', en: 'Sep. 2021 – Jun. 2025' },
		location: { zh: '青岛', en: 'Qingdao' },
		summary: {
			zh: '在数学与应用数学专业接受系统的数学理论、统计计算、算法与建模训练，获理学荣誉学士学位。',
			en: 'Completed systematic training in mathematical theory, statistical computing, algorithms, and modeling in the Mathematics and Applied Mathematics program, earning an Honorary B.S. degree.',
		},
		tags: {
			zh: ['专业排名前 3%', '理学荣誉学士'],
			en: ['Top 3% in program', 'Honorary B.S.'],
		},
		sections: [
			{
				title: { zh: '主修课程', en: 'Major coursework' },
				items: {
					zh: [
						'理论类课程：数学分析 I–III、高等代数 I–II、运筹学、解析几何、概率论、常微分方程、实变函数、数学物理方程、数理统计、时间序列分析、应用统计系列课程（统计分析、统计建模、统计推断）、数据科学、贝叶斯统计计算、优化方法、数值方法、决策科学、博弈论基础。',
						'实践类课程：数学建模、数学实践、数学软件、算法与数据结构分析、C 程序设计、数学项目。',
					],
					en: [
						'Theory courses: Mathematical Analysis I–III, Advanced Algebra I–II, Operations Research, Analytic Geometry, Probability Theory, Ordinary Differential Equations, Real Analysis, Equations of Mathematical Physics, Mathematical Statistics, Time Series Analysis, Applied Statistics (Statistical Analysis, Statistical Modeling, and Statistical Inference), Data Science, Bayesian Statistical Computing, Optimization Methods, Numerical Methods, Decision Science, and Foundations of Game Theory.',
						'Practice courses: Mathematical Modeling, Mathematical Practice, Mathematical Software, Algorithm and Data Structure Analysis, C Programming, and Mathematics Project.',
					],
				},
			},
			{
				title: { zh: '学生工作', en: 'Student service' },
				experiences: [
					{
						role: { zh: '先后担任班长、学习委员、班级团支书', en: 'Class Monitor, Academic Representative, and Youth League Branch Secretary' },
						period: { zh: '2021.09 – 2025.06', en: 'Sep. 2021 – Jun. 2025' },
						details: {
							zh: ['负责班级日常事务协调、信息传达与同学服务。'],
							en: ['Coordinated routine class affairs, communication, and student support.'],
						},
					},
				],
			},
			{
				title: { zh: '毕业论文', en: 'Undergraduate thesis' },
				body: {
					zh: '《笛卡尔积下特殊图类的 B-染色研究》讨论要求每个 4-cycle 均为彩虹的正常边染色问题，围绕特殊图类的 B-边色数、结构分析与算法构造展开。',
					en: '“B-coloring of Special Graph Classes under Cartesian Products” studies proper edge colorings in which every 4-cycle is rainbow, focusing on B-coloring numbers, structural analysis, and algorithmic constructions for special graph classes.',
				},
			},
		],
	},
] as const satisfies readonly EducationProfile[];
