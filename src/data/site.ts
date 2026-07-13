export type Locale = 'zh' | 'en';

export const siteUrl = 'https://zysishuiyears.github.io';
export const publicEmail = 'jiangzhengxuoucstu@163.com';
export const githubUrl = 'https://github.com/Zysishuiyears';

export const localeMeta = {
	zh: {
		label: '中文',
		shortLabel: 'EN',
		htmlLang: 'zh-CN',
		name: '姜政旭',
		englishName: 'Zhengxu Jiang',
		title: '姜政旭 | 图论、组合优化与图算法',
		description:
			'南开大学应用数学硕士研究生，研究结构图论、图染色、组合优化与图算法，并关注图学习及 AI for Combinatorial Optimization。',
	},
	en: {
		label: 'English',
		shortLabel: '中文',
		htmlLang: 'en',
		name: 'Zhengxu Jiang',
		englishName: '姜政旭',
		title: 'Zhengxu Jiang | Graph Theory and Combinatorial Optimization',
		description:
			'M.S. student in Applied Mathematics at Nankai University working on structural graph theory, graph coloring, combinatorial optimization, and graph algorithms.',
	},
} as const;

export const navItems = {
	zh: [
		{ href: '#about', label: '首页' },
		{ href: '#experience', label: '教育经历' },
		{ href: '#research', label: '研究方向' },
		{ href: '#projects', label: '项目' },
		{ href: '#news', label: '动态' },
		{ href: '#contact', label: '联系' },
	],
	en: [
		{ href: '#about', label: 'Home' },
		{ href: '#experience', label: 'Education' },
		{ href: '#research', label: 'Research' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#news', label: 'News' },
		{ href: '#contact', label: 'Contact' },
	],
} as const;

export const homeContent = {
	zh: {
		profileRole: '南开大学 · 应用数学硕士生',
		profileBio: '图论与组合优化背景，关注图算法、Graph Learning 与 AI for CO。',
		availability: '欢迎科研合作与算法实习交流',
		aboutTitle: '关于我',
		intro: [
			'我是姜政旭，南开大学数学科学学院应用数学硕士研究生，研究方向为结构图论、图染色与组合优化。当前主要关注平面图及特殊图类上的 B-coloring 问题。',
			'我希望进一步将结构图论方法拓展到图学习、面向大模型的图方法与大规模图计算，探索图结构信息在图表示学习、图记忆、图语言模型和图增强智能体中的建模与利用。',
		],
		focusTitle: '研究兴趣',
		focusAreas: [
			{
				title: '结构图论与图染色',
				description: 'B-coloring、平面图、笛卡尔积图、符号图与极值结构。',
			},
			{
				title: '图算法与组合优化',
				description: 'SAT/SMT、整数规划、NP-hard 问题启发式求解与计算图调度。',
			},
			{
				title: 'Graph Learning 与 Graph for LLM',
				description: '图表示学习、图记忆、图语言模型与图增强智能体。',
			},
		],
		projectsTitle: '项目',
		publicationsTitle: '论文与研究成果',
		publications: [
			{
				title: 'B-coloring of Cartesian Products of Paths and Cycles',
				authors: '姜政旭、李佳傲（数学类论文严格字母排序）',
				venue: 'Submitted manuscript',
				date: '2026.06',
				description:
					'利用次可加不等式、匹配分解、周期构造与局部结构分析研究路、圈及其笛卡尔积上的 B-coloring，并使用 SAT 求解辅助小规模搜索。',
				link: undefined,
				repository: 'https://github.com/Zysishuiyears/Graph-Theory-B-coloring-of-Cartesian-products',
			},
			{
				title: '尖叫效应传播机制及仿真研究',
				authors: '姜政旭、姚嘉祺、孟令钧、王建、曹永昌',
				venue: '《数学建模及其应用》12(4): 64–72+106',
				date: '2023.12',
				description:
					'将信息异常放大建模为加权有向网络，结合 SEIR、脉冲函数、LeaderRank 与 k-core 分析传播机制和干预策略。',
				link: 'https://doi.org/10.19943/j.2095-3070.jmmia.2023.04.09',
				repository: 'https://github.com/Zysishuiyears/scream-effect-propagation-simulation',
			},
		],
		experienceTitle: '教育经历',
		education: [
			{
				institution: '南开大学 · 数学科学学院',
				degree: '应用数学硕士（图论与组合优化）',
				period: '2025.09 – 2028.06（预计）',
				advisor: { label: '导师：李佳傲教授', url: 'https://www.lijiaao-dm-nk.com/' },
				details: '保研录取；主修课程：图论、极值图论、深度学习、泛函分析、测度论等。',
			},
			{
				institution: '中国海洋大学 · 数学与应用数学',
				degree: '理学荣誉学士',
				period: '2021.09 – 2025.06',
				advisor: undefined,
				details: 'GPA 3.77/4.00（综合排名 3/133）；本科优秀毕业论文；主修课程：数学分析、高等代数、算法分析与数据结构、数据科学等。',
			},
		],
		selectedWorkTitle: '其他竞赛经历',
		selectedWork: [
			{
				title: '信息茧房的破除与信息平衡策略分析',
				meta: '2022 深圳杯数学建模挑战赛 · 全国三等奖',
				description: '使用大规模加权网络、朴素贝叶斯与 ALS 研究推荐反馈和网络结构对信息聚集的影响。',
				paper: '/papers/2022-shenzhen-cup-information-cocoon.pdf',
			},
			{
				title: '基于图模型的复杂水网调控与优化',
				meta: '2024 The Interdisciplinary Contest in Modeling · Finalist（特等奖提名，运筹与网络科学类）',
				description: '将五大湖水系抽象为加权有向图，并在水量平衡约束下建立多目标优化与动态仿真模型。',
				paper: '/papers/2024-mcm-great-lakes.pdf',
			},
			{
				title: '无人机编队几何定位与位置调整',
				meta: '2022 全国大学生数学建模竞赛 · 全国二等奖',
				description: '利用几何约束与三角定位设计纯方位无源定位和编队误差修正算法。',
				paper: '/papers/2022-cumcm-uav-localization.pdf',
			},
		],
		honorsTitle: '奖励与荣誉',
		honors: [
			'南开大学陈省身新生奖学金（2025.09）',
			'南开大学公能奖学金（2025.09）',
			'南开大学推免奖学金（2025.09）',
			'中国海洋大学理学荣誉学士（2025.05）',
			'中国海洋大学本科优秀毕业论文（2025.05）',
			'中国银行自强大学生奖学金（2024.11）',
			'中国海洋大学综合一等奖学金（2024.11）',
			'中国海洋大学优秀学生干部（2024.11）',
			'中国海洋大学优秀共青团干部（2024.04）',
			'中国海洋大学综合二等奖学金（2023.11）',
			'本科生国家奖学金（2022.11）',
			'中国海洋大学综合一等奖学金（2022.11）',
			'中国海洋大学优秀学生（2022.11）',
		],
		skillsTitle: '技术能力',
		skills: [
			{ label: '编程语言', value: 'Python、C/C++、Bash/Shell' },
			{ label: '算法与优化', value: '图算法、SAT/SMT、IP/MILP、NP-hard 问题启发式算法、计算图调度' },
			{ label: '机器学习', value: '神经网络、CNN/RNN/LSTM、GNN、Transformer、HMM；PyTorch、TensorFlow' },
			{ label: '工具', value: 'Git/GitHub、Linux、LaTeX、Codex 与 LLM 辅助开发' },
		],
		newsTitle: '动态',
		news: [
			{ date: '2026.06', text: '投稿论文 “B-coloring of Cartesian Products of Paths and Cycles”。' },
			{ date: '2025.09', text: '进入南开大学攻读应用数学硕士学位。' },
			{ date: '2025.09', text: '获得“华为杯”研究生数学建模竞赛全国三等奖。' },
			{ date: '2025.05', text: '获中国海洋大学理学荣誉学士与本科优秀毕业论文。' },
			{ date: '2024.12', text: '校级科研训练项目“社交网络中‘信息茧房’效应的机理研究”以“优秀”等次结项。' },
		],
		contactTitle: '联系',
		emailLabel: '电子邮箱',
		githubLabel: 'GitHub',
	},
	en: {
		profileRole: 'M.S. Student in Applied Mathematics @ Nankai',
		profileBio: 'Graph theory and combinatorial optimization, with interests in graph algorithms, graph learning, and AI for combinatorial optimization.',
		availability: 'Open to research collaboration and algorithm internships',
		aboutTitle: 'About Me',
		intro: [
			'I am Zhengxu Jiang, an M.S. student in Applied Mathematics at the School of Mathematical Sciences, Nankai University. I work on structural graph theory, graph coloring, and combinatorial optimization, with a current focus on B-coloring problems on planar graphs and other special graph classes.',
			'I am also interested in extending structural graph methods to graph learning, graph-based methods for LLMs, and large-scale graph computing, particularly graph representation learning, graph memory, graph language models, and graph-augmented agents.',
		],
		focusTitle: 'Research Interests',
		focusAreas: [
			{
				title: 'Structural graph theory and coloring',
				description: 'B-coloring, planar graphs, Cartesian products, signed graphs, and extremal structure.',
			},
			{
				title: 'Graph algorithms and combinatorial optimization',
				description: 'SAT/SMT, integer programming, heuristics for NP-hard problems, and computational-graph scheduling.',
			},
			{
				title: 'Graph learning and graph-based methods for LLMs',
				description: 'Graph representation learning, graph memory, graph language models, and graph-augmented agents.',
			},
		],
		projectsTitle: 'Projects',
		publicationsTitle: 'Publications and Research',
		publications: [
			{
				title: 'B-coloring of Cartesian Products of Paths and Cycles',
				authors: 'Zhengxu Jiang, Jiaao Li (authors listed in strict alphabetical order, as customary in mathematics)',
				venue: 'Submitted manuscript',
				date: '2026.06',
				description:
					'Studies B-coloring on paths, cycles, and Cartesian products using subadditive inequalities, matching decompositions, periodic constructions, local analysis, and SAT-assisted search.',
				link: undefined,
				repository: 'https://github.com/Zysishuiyears/Graph-Theory-B-coloring-of-Cartesian-products',
			},
			{
				title: 'Propagation Mechanism and Simulation Study of the “Scream Effect”',
				authors: 'Zhengxu Jiang, Jiaqi Yao, Lingjun Meng, Jian Wang, Yongchang Cao',
				venue: 'Mathematical Modeling and Its Applications 12(4): 64–72+106',
				date: 'Dec. 2023',
				description:
					'Models anomalous information amplification as a weighted directed network using SEIR dynamics, pulse functions, LeaderRank, and k-core analysis.',
				link: 'https://doi.org/10.19943/j.2095-3070.jmmia.2023.04.09',
				repository: 'https://github.com/Zysishuiyears/scream-effect-propagation-simulation',
			},
		],
		experienceTitle: 'Education',
		education: [
			{
				institution: 'Nankai University · School of Mathematical Sciences',
				degree: 'M.S. in Applied Mathematics',
				period: 'Sep. 2025 – Jun. 2028 (expected)',
				advisor: { label: 'Advisor: Prof. Jiaao Li', url: 'https://www.lijiaao-dm-nk.com/' },
				details: 'Research focus: Graph Theory and Combinatorial Optimization; major coursework: Graph Theory, Extremal Graph Theory, Deep Learning, Functional Analysis, and Measure Theory.',
			},
			{
				institution: 'Ocean University of China · Mathematics and Applied Mathematics',
				degree: 'Honorary Bachelor of Science',
				period: 'Sep. 2021 – Jun. 2025',
				advisor: undefined,
				details: 'GPA 3.77/4.00 (overall rank: 3/133); Outstanding Undergraduate Thesis; major coursework: Mathematical Analysis, Advanced Algebra, Algorithm Analysis and Data Structures, and Data Science.',
			},
		],
		selectedWorkTitle: 'Other Competition Experience',
		selectedWork: [
			{
				title: 'Breaking Information Cocoons and Information-balancing Strategies',
				meta: '2022 Shenzhen Cup Mathematical Modeling Challenge · National Third Prize',
				description: 'A large-scale weighted-network model using naive Bayes and ALS to study recommendation feedback and information concentration.',
				paper: '/papers/2022-shenzhen-cup-information-cocoon.pdf',
			},
			{
				title: 'Graph-based Control and Optimization of Complex Water Networks',
				meta: '2024 The Interdisciplinary Contest in Modeling · Finalist (Special Prize Nominee; Operations Research and Network Science)',
				description: 'A weighted directed-graph and multi-objective model of the Great Lakes system under water-balance constraints.',
				paper: '/papers/2024-mcm-great-lakes.pdf',
			},
			{
				title: 'Geometric Localization and Position Adjustment of UAV Swarms',
				meta: '2022 CUMCM · National Second Prize',
				description: 'Bearing-only localization and formation correction based on geometric constraints and triangulation.',
				paper: '/papers/2022-cumcm-uav-localization.pdf',
			},
		],
		honorsTitle: 'Awards and Honors',
		honors: [
			'Shiing-Shen Chern Freshman Scholarship, Nankai University (Sep. 2025)',
			'Gongneng Scholarship, Nankai University (Sep. 2025)',
			'Graduate Recommendation Scholarship, Nankai University (Sep. 2025)',
			'Honorary Bachelor of Science, Ocean University of China (May 2025)',
			'Outstanding Undergraduate Thesis, Ocean University of China (May 2025)',
			'Bank of China Self-Improvement Scholarship (Nov. 2024)',
			'First-Class Comprehensive Scholarship, Ocean University of China (Nov. 2024)',
			'Outstanding Student Leader, Ocean University of China (Nov. 2024)',
			'Outstanding Communist Youth League Cadre, Ocean University of China (Apr. 2024)',
			'Second-Class Comprehensive Scholarship, Ocean University of China (Nov. 2023)',
			'National Scholarship for Undergraduate Students (Nov. 2022)',
			'First-Class Comprehensive Scholarship, Ocean University of China (Nov. 2022)',
			'Outstanding Student, Ocean University of China (Nov. 2022)',
		],
		skillsTitle: 'Skills',
		skills: [
			{ label: 'Programming languages', value: 'Python, C/C++, Bash/Shell' },
			{ label: 'Algorithms and optimization', value: 'Graph algorithms, SAT/SMT, IP/MILP, NP-hard heuristics, computational-graph scheduling' },
			{ label: 'Machine learning', value: 'Neural networks, CNN/RNN/LSTM, GNNs, Transformers, HMMs; PyTorch and TensorFlow' },
			{ label: 'Tools', value: 'Git/GitHub, Linux, LaTeX, Codex and LLM-assisted development' },
		],
		newsTitle: 'News',
		news: [
			{ date: '2026.06', text: 'Submitted “B-coloring of Cartesian Products of Paths and Cycles.”' },
			{ date: '2025.09', text: 'Began M.S. studies in Applied Mathematics at Nankai University.' },
			{ date: '2025.09', text: 'Won a National Third Prize in the China Postgraduate Mathematical Contest in Modeling.' },
			{ date: '2025.05', text: 'Graduated from Ocean University of China with an Honorary B.S. and an Outstanding Undergraduate Thesis.' },
			{ date: '2024.12', text: 'The university-level research training project “Mechanisms of the ‘Information Cocoon’ Effect in Social Networks” concluded with an Excellent rating.' },
		],
		contactTitle: 'Contact',
		emailLabel: 'Email',
		githubLabel: 'GitHub',
	},
} as const;
