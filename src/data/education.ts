import type { Locale } from './site';

type Localized<T> = Record<Locale, T>;

export interface EducationSection {
	title: Localized<string>;
	body?: Localized<string>;
	items?: Localized<readonly string[]>;
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
			zh: ['专业排名前 20%', '图论与组合优化', '硕士研究生'],
			en: ['Top 20% in program', 'Graph Theory and Combinatorial Optimization', 'M.S. student'],
		},
		advisor: {
			label: { zh: '导师：李佳傲教授', en: 'Advisor: Prof. Jiaao Li' },
			url: 'https://www.lijiaao-dm-nk.com/',
		},
		sections: [
			{
				title: { zh: '培养与研究方向', en: 'Program and research focus' },
				body: {
					zh: '在南开大学数学科学学院攻读应用数学硕士学位，接受图论、分析与优化方法训练，并围绕图论与组合优化开展研究。',
					en: 'Pursuing an M.S. in Applied Mathematics at the School of Mathematical Sciences, with training in graph theory, analysis, and optimization and research centered on graph theory and combinatorial optimization.',
				},
			},
			{
				title: { zh: '主修课程', en: 'Major coursework' },
				items: {
					zh: ['图论', '图极限与图同态', '最优化方法', '泛函分析', '概率论与测度论', '深度学习'],
					en: ['Graph Theory', 'Graph Limits and Graph Homomorphisms', 'Optimization Methods', 'Functional Analysis', 'Probability Theory and Measure Theory', 'Deep Learning'],
				},
			},
			{
				title: { zh: '学生工作与教学实践', en: 'Student service and teaching practice' },
				items: {
					zh: [
						'担任南开大学数学建模协会常务理事会成员与教练员，参与协会核心工作决策。',
						'参与协会校外合作指导任务与数学建模校队培训。',
						'以选派指导员身份参与第九届全军数学建模竞赛队伍指导，协助模型设计、编程实践以及报告撰写与修改。',
						'负责数学建模校队“图模型与图算法”章节培训。',
					],
					en: [
						'Serve as an executive council member and coach in the Nankai University Mathematical Modeling Association, contributing to decisions on its core activities.',
						'Participate in external collaborative mentoring and training for the university mathematical modeling team.',
						'Served as an appointed instructor for a team in the 9th All-Army Mathematical Modeling Competition, supporting model design, programming, and report drafting and revision.',
						'Delivered training on graph models and graph algorithms for the university mathematical modeling team.',
					],
				},
			},
			{
				title: { zh: '奖学金', en: 'Scholarships' },
				items: {
					zh: ['南开大学陈省身新生奖学金', '南开大学公能奖学金', '南开大学推免奖学金'],
					en: ['Shiing-Shen Chern Freshman Scholarship', 'Gongneng Scholarship', 'Graduate Recommendation Scholarship'],
				},
			},
		],
	},
	{
		slug: 'ouc',
		institution: { zh: '中国海洋大学', en: 'Ocean University of China' },
		school: { zh: '数学科学学院', en: 'School of Mathematical Sciences' },
		degree: { zh: '数学与应用数学（应用统计方向）· 理学荣誉学士', en: 'Mathematics and Applied Mathematics (Applied Statistics) · Honorary B.S.' },
		period: { zh: '2021.09 – 2025.06', en: 'Sep. 2021 – Jun. 2025' },
		location: { zh: '青岛', en: 'Qingdao' },
		summary: {
			zh: '在数学与应用数学专业接受系统的数学理论、统计计算、算法与建模训练，专业方向为应用统计，获理学荣誉学士学位。',
			en: 'Completed systematic training in mathematical theory, statistical computing, algorithms, and modeling in the Mathematics and Applied Mathematics program, with a concentration in Applied Statistics and an Honorary B.S. degree.',
		},
		tags: {
			zh: ['专业排名前 3%', '应用统计方向', '理学荣誉学士'],
			en: ['Top 3% in program', 'Applied Statistics', 'Honorary B.S.'],
		},
		sections: [
			{
				title: { zh: '专业培养', en: 'Program training' },
				body: {
					zh: '本科阶段主修数学与应用数学（应用统计方向），在数学理论基础、统计建模、优化方法和算法实践之间形成交叉训练。',
					en: 'Majored in Mathematics and Applied Mathematics with a concentration in Applied Statistics, combining foundations in mathematical theory with statistical modeling, optimization, and algorithmic practice.',
				},
			},
			{
				title: { zh: '主修课程', en: 'Major coursework' },
				items: {
					zh: [
						'理论基础：数学分析 I–III、高等代数 I–II、解析几何、概率论、常微分方程、实变函数、数学物理方程。',
						'统计与优化：优化与运筹学、数值方法、数理统计、应用统计系列课程、贝叶斯计算、数据科学、决策科学。',
						'算法与实践：数学建模、数学实践、数学软件、算法与数据结构分析、C 程序设计、数学项目、博弈论基础。',
					],
					en: [
						'Theory: Mathematical Analysis I–III, Advanced Algebra I–II, Analytic Geometry, Probability Theory, Ordinary Differential Equations, Real Analysis, and Equations of Mathematical Physics.',
						'Statistics and optimization: Optimization and Operations Research, Numerical Methods, Mathematical Statistics, Applied Statistics courses, Bayesian Computing, Data Science, and Decision Science.',
						'Algorithms and practice: Mathematical Modeling, Mathematical Practice, Mathematical Software, Algorithm and Data Structure Analysis, C Programming, Mathematics Project, and Foundations of Game Theory.',
					],
				},
			},
			{
				title: { zh: '学生工作', en: 'Student service' },
				body: {
					zh: '曾任班长、学习委员和班级团支书，负责班级日常事务协调、信息传达与同学服务。',
					en: 'Served as class monitor, academic representative, and Youth League branch secretary, coordinating routine class affairs, communication, and student support.',
				},
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
