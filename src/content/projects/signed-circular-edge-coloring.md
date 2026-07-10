---
slug: signed-circular-edge-coloring
date: 2026-07-01
featured: true
title:
  zh: 符号图圆环边染色的精确计算
  en: Exact Circular Edge Coloring of Signed Graphs
summary:
  zh: 面向具体符号图实例，实现固定圆环周长的可行性判定、最小可行周长优化与染色证据独立验证。
  en: An exact solver for feasibility, minimum-circumference optimization, and independent witness verification in signed-graph circular edge coloring.
problem:
  zh: 对给定符号图 (G, σ)，需要精确判断候选圆环周长 r 是否可行，并进一步求得最小可行值，同时保留可独立核验的染色证据。
  en: Given a signed graph (G, σ), the task is to decide whether a candidate circumference r is feasible, optimize the minimum feasible value, and retain a verifiable coloring witness.
method:
  zh: 使用有理数参数和关联色约束建立精确模型，以 Z3 完成可行性与优化求解，并通过独立验证器复核求解器返回的证据。
  en: The implementation uses rational parameters and incidence-color constraints, solves feasibility and optimization with Z3, and checks every returned witness with an independent verifier.
results:
  zh: 形成 decide、optimize、verify 三类命令行能力，以及版本化实例、自动测试和可复现实验产物目录。
  en: The repository provides decide, optimize, and verify commands together with versioned instances, automated tests, and reproducible run artifacts.
role:
  zh: 负责数学模型、核心 Python 包、命令行接口、测试体系和实验结果组织。
  en: Designed the mathematical model, core Python package, CLI, test suite, and experiment-artifact workflow.
workflow:
  - title:
      zh: 实例建模
      en: Instance modeling
    description:
      zh: 用 JSON 表示底图、边符号和精确有理数参数。
      en: Represent the graph, edge signs, and exact rational parameters in JSON.
  - title:
      zh: 精确求解
      en: Exact solving
    description:
      zh: 分别执行固定 r 判定或最小 r 优化。
      en: Run either fixed-r feasibility or minimum-r optimization.
  - title:
      zh: 证据核验
      en: Witness verification
    description:
      zh: 独立检查颜色证据是否满足所有关联约束。
      en: Independently verify that the coloring witness satisfies every incidence constraint.
tags:
  - Signed Graphs
  - Circular Coloring
  - Z3
  - Exact Optimization
  - pytest
links:
  repo: https://github.com/Zysishuiyears/Signed-Circular-Edge-Coloring
---
