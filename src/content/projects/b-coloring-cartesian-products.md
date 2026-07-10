---
slug: b-coloring-cartesian-products
date: 2026-06-01
featured: true
title:
  zh: 笛卡尔积图的 B-coloring 与 SAT 求解
  en: B-coloring of Cartesian Products with SAT
summary:
  zh: 研究路、圈及其笛卡尔积上的 B-coloring，并以 SAT 约束求解辅助小规模构造搜索和猜想检验。
  en: A structural and computational study of B-coloring on paths, cycles, and their Cartesian products, supported by SAT-based search.
problem:
  zh: 这里的 B-coloring 指一种正常边染色，并要求图中的每个 4-cycle 都是彩虹的。核心问题是如何利用笛卡尔积结构确定或估计所需的最少颜色数。
  en: Here, B-coloring means a proper edge coloring in which every 4-cycle is rainbow. The central question is how Cartesian-product structure constrains the minimum number of colors.
method:
  zh: 结合次可加不等式、匹配分解、周期构造与局部结构分析开展理论证明，并将边色、冲突约束和 4-cycle 彩虹条件编码为 CNF，调用 CryptoMiniSat 搜索小规模实例。
  en: The work combines subadditive inequalities, matching decompositions, periodic constructions, and local structural analysis with a CNF encoding solved by CryptoMiniSat on small instances.
results:
  zh: 建立了从结构分析、候选构造到计算验证的完整研究流程，并将相关结果整理为 2026 年 6 月投稿的论文手稿。
  en: The project established a complete workflow from structural analysis and candidate constructions to computational verification, culminating in a manuscript submitted in June 2026.
role:
  zh: 负责主要的理论分析、证明组织、SAT 约束建模、实验脚本和结果核验。
  en: Led the theoretical analysis, proof organization, SAT modeling, experiment scripts, and result verification.
workflow:
  - title:
      zh: 结构分解
      en: Structural decomposition
    description:
      zh: 分析笛卡尔积中的纤维、匹配与 4-cycle 约束。
      en: Analyze fibers, matchings, and 4-cycle constraints in Cartesian products.
  - title:
      zh: 约束编码
      en: Constraint encoding
    description:
      zh: 将正常边染色与彩虹 4-cycle 条件转换为 CNF。
      en: Translate proper edge coloring and rainbow 4-cycle conditions into CNF.
  - title:
      zh: 计算验证
      en: Computational verification
    description:
      zh: 对小规模实例搜索构造、排除反例并检验猜想。
      en: Search small instances, rule out counterexamples, and test conjectures.
tags:
  - Graph Theory
  - Edge Coloring
  - Cartesian Product
  - SAT
  - Python
links:
  repo: https://github.com/Zysishuiyears/Graph-Theory-B-coloring-of-Cartesian-products
---
