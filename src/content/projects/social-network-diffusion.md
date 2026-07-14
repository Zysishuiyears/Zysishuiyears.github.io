---
slug: social-network-diffusion
date: 2024-12-01
title:
  zh: 社交网络中“信息茧房”效应的机理研究
  en: Mechanisms of the Information Cocoon Effect in Social Networks
summary:
  zh: 以加权有向图刻画信息接收、加工和传播过程，研究异常放大、意见强化与网络结构之间的相互作用。
  en: Weighted directed-network models for information diffusion, anomalous amplification, opinion reinforcement, and echo-chamber formation.
problem:
  zh: 社交平台中的推荐反馈、节点影响力与群体结构会共同改变信息传播路径，需要同时描述传播动力学和网络结构，才能分析信息异常放大与茧房效应。
  en: Recommendation feedback, node influence, and community structure jointly alter diffusion paths, so both network structure and transmission dynamics are needed to study anomalous amplification and echo chambers.
method:
  zh: 将传播关系建模为加权有向图，结合 SEIR、脉冲函数、LeaderRank 与 k-core 分析传播和干预；在后续项目中加入意见值、边权和反馈调整机制模拟信息茧房演化。
  en: The work models diffusion as a weighted directed graph and combines SEIR dynamics, pulse functions, LeaderRank, and k-core analysis; a follow-up model adds opinion values, edge weights, and feedback adjustment to simulate echo-chamber evolution.
results:
  zh: 形成论文《尖叫效应传播机制及仿真研究》；校级科研训练项目《社交网络中“信息茧房”效应的机理研究》以“优秀”等次结项。
  en: The work led to the paper “Propagation Mechanism and Simulation Study of the Scream Effect”; the university-level research training project “Mechanisms of the Information Cocoon Effect in Social Networks” concluded with an Excellent rating.
role:
  zh: 担任项目负责人，负责模型设计、仿真实验、结构分析与论文写作。
  en: Served as project lead, responsible for model design, simulation, structural analysis, and manuscript preparation.
workflow:
  - title:
      zh: 网络表示
      en: Network representation
    description:
      zh: 用节点影响力、边权与兴趣阈值描述社交网络。
      en: Represent the social network through influence, edge weights, and interest thresholds.
  - title:
      zh: 动力学建模
      en: Diffusion dynamics
    description:
      zh: 结合 SEIR 与脉冲机制模拟信息扩散和异常放大。
      en: Combine SEIR and impulse mechanisms to simulate diffusion and anomalous amplification.
  - title:
      zh: 结构诊断
      en: Structural diagnosis
    description:
      zh: 使用 LeaderRank 与 k-core 识别关键节点并分析干预策略。
      en: Use LeaderRank and k-core to identify key nodes and evaluate interventions.
tags:
  - Complex Networks
  - Information Diffusion
  - SEIR
  - LeaderRank
  - k-core
links:
  repo: https://github.com/Zysishuiyears/scream-effect-propagation-simulation
  paper: /papers/scream-effect-propagation-simulation.pdf
---
