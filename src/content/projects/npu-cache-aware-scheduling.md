---
slug: npu-cache-aware-scheduling
date: 2025-09-01
title:
  zh: 面向 NPU 的缓存感知 DAG 调度与流水优化
  en: Cache-aware DAG Scheduling for NPUs
summary:
  zh: 将 SIMD/NPU 算子依赖抽象为有向无环计算图，在缓存受限条件下联合考虑调度、内存分配、SPILL 与流水压缩。
  en: Cache-aware scheduling, memory allocation, spill selection, and pipeline compression for DAG-structured SIMD/NPU compute graphs.
problem:
  zh: 计算图调度不仅要满足拓扑依赖，还要处理片上缓存容量、数据驻留、DMA 搬运与执行单元约束；单纯按就绪顺序执行会造成额外的数据移动和流水空隙。
  en: Compute-graph scheduling must satisfy dependencies while managing on-chip capacity, data residency, DMA movement, and execution-unit constraints; a readiness-only policy can create avoidable traffic and pipeline slack.
method:
  zh: 设计缓存压力感知的拓扑调度，结合 WCB 类评分、连续多池内存分配、SPILL 受害者选择和 ASAP 风格流水压缩，生成竞赛要求的调度与内存文件。
  en: The method combines cache-pressure-aware topological scheduling, WCB-style scores, contiguous multi-pool allocation, spill-victim selection, and ASAP-style pipeline compression.
results:
  zh: 项目获得 2025 年“华为杯”研究生数学建模竞赛全国三等奖，并整理为带有统一 CLI、冒烟测试和中英文说明的可复现代码库。
  en: The project won a National Third Prize in the 2025 China Postgraduate Mathematical Contest in Modeling and was reorganized into a reproducible codebase with unified CLIs, smoke tests, and bilingual documentation.
role:
  zh: 参与问题抽象、算法设计、实验验证和代码库整理，重点关注图调度与缓存管理之间的耦合。
  en: Contributed to problem abstraction, algorithm design, experimental verification, and codebase organization, with emphasis on the coupling between graph scheduling and cache management.
workflow:
  - title:
      zh: 图调度
      en: Graph scheduling
    description:
      zh: 在依赖与缓存驻留约束下选择就绪算子。
      en: Select ready operators under dependency and residency constraints.
  - title:
      zh: 内存与 SPILL
      en: Memory and spills
    description:
      zh: 分配连续缓存地址并在容量不足时选择换出对象。
      en: Allocate contiguous cache regions and select spill victims under pressure.
  - title:
      zh: 流水压缩
      en: Pipeline compression
    description:
      zh: 在执行单元约束下左移任务，减少可消除的流水空隙。
      en: Shift tasks left under execution-unit constraints to remove avoidable slack.
tags:
  - DAG Scheduling
  - NPU
  - Combinatorial Optimization
  - Memory Allocation
  - Python
links:
  repo: https://github.com/Zysishuiyears/2025Huaweicup_Cachenpuscheduling
---
