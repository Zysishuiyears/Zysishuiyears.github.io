---
slug: social-network-diffusion
date: 2024-12-01
title:
  zh: 社交网络中“信息茧房”效应的机理研究
  en: Mechanisms of the Information Cocoon Effect in Social Networks
summary:
  zh: 以加权有向网络描述信息接收、加工、传播与意见反馈，结合传播动力学与网络结构分析，研究信息异常放大、关键节点识别以及信息茧房的形成与干预。
  en: Uses a weighted directed network to model information reception, processing, diffusion, and opinion feedback, combining diffusion dynamics with structural analysis to study anomalous amplification, key-node identification, and the formation and intervention of information cocoons.
problem:
  zh: 社交平台中的节点影响力、兴趣偏好、推荐反馈和群体结构会共同改变传播路径：局部信息可能被异常放大并形成“尖叫效应”，持续的意见强化又会推动信息茧房形成。因此需要在统一框架中同时刻画传播动力学、网络结构和意见反馈。
  en: >-
    Node influence, interests, recommendation feedback, and community structure jointly reshape diffusion paths: local signals can be anomalously amplified into a “scream effect,” while persistent opinion reinforcement can form information cocoons. A unified model must therefore capture diffusion dynamics, network structure, and feedback-driven opinion change.
method:
  zh: 使用节点影响力、边权和兴趣阈值构建加权有向网络，以 SEIR 与脉冲函数描述传播规模和异常放大，并通过 LeaderRank 与 k-core 识别关键节点和结构性干预位置；在信息茧房模型中进一步引入意见值、边权反馈和基于误差反向分解的权值更新，刻画信息接收、加工与传播的链式演化。
  en: The model builds a weighted directed network from node influence, edge weights, and interest thresholds; SEIR dynamics and impulse functions describe diffusion scale and anomalous amplification, while LeaderRank and k-core identify influential nodes and structural intervention points. The information-cocoon extension introduces opinion values, edge-weight feedback, and an error-backpropagation-inspired update rule to model the chain of information reception, processing, and transmission.
results:
  zh: 形成论文《尖叫效应传播机制及仿真研究》；校级本科生研究发展计划《社交网络中“信息茧房”效应的机理研究》以“优秀”等次结项。相关研究受到“2023 年全国大学生数学建模竞赛赛后研究项目”支持。
  en: The work produced the paper “Propagation Mechanism and Simulation Study of the Scream Effect”; the university Undergraduate Research Development Program project “Mechanisms of the Information Cocoon Effect in Social Networks” concluded with an Excellent rating. The research was supported by the 2023 China Undergraduate Mathematical Contest in Modeling Post-Competition Research Program.
role:
  zh: 担任项目负责人，负责两阶段研究中的网络建模、传播与反馈机制设计、仿真实验、结构分析和论文写作。
  en: Served as project lead across both stages, responsible for network modeling, diffusion and feedback mechanisms, simulation, structural analysis, and manuscript preparation.
workflow:
  - title:
      zh: 网络表示
      en: Network representation
    description:
      zh: 用节点影响力、边权与兴趣阈值描述社交网络。
      en: Represent the social network through influence, edge weights, and interest thresholds.
  - title:
      zh: 传播与异常放大
      en: Diffusion dynamics
    description:
      zh: 结合 SEIR 与脉冲机制模拟信息扩散和异常放大。
      en: Combine SEIR and impulse mechanisms to simulate diffusion and anomalous amplification.
  - title:
      zh: 意见反馈与茧房演化
      en: Opinion feedback and cocoon evolution
    description:
      zh: 通过意见值、边权与反馈更新模拟信息茧房的动态形成过程。
      en: Model the evolution of information cocoons through opinion values, edge weights, and feedback updates.
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
