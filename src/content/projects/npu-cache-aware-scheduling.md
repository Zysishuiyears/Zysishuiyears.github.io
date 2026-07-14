---
slug: npu-cache-aware-scheduling
date: 2025-09-01
title:
  zh: 面向 NPU 的缓存感知 DAG 调度与流水优化
  en: Cache-aware DAG Scheduling for NPUs
summary:
  zh: 将 SIMD/NPU 算子依赖建模为有向无环计算图，在缓存受限条件下联合研究拓扑调度、数据驻留与流水优化，减少可避免的执行空隙与数据搬运。
  en: Models SIMD/NPU operator dependencies as a directed acyclic graph and jointly studies topological scheduling, data residency, and pipeline optimization under limited on-chip cache to reduce avoidable execution slack and data movement.
problem:
  zh: 面向 SIMD/NPU 架构，计算图调度既要满足算子的拓扑依赖与执行单元约束，也要处理片上缓存容量、数据驻留和 DMA 搬运开销；缓存受限时，简单的就绪队列策略容易产生重复换入换出和流水空隙。
  en: On SIMD/NPU architectures, compute-graph scheduling must satisfy operator dependencies and execution-unit constraints while managing limited on-chip capacity, data residency, and DMA movement. Under cache pressure, a readiness-only policy can trigger repeated swaps and avoidable pipeline gaps.
method:
  zh: 将算子依赖建模为 DAG，在拓扑约束和缓存驻留条件下使用 WCB 类评分确定调度顺序；结合连续多池内存分配、SPILL 受害者选择与换入换出节点插入，并通过 ASAP 风格流水压缩在执行单元约束下前移任务。
  en: The method represents operator dependencies as a DAG and uses WCB-style scores to choose a schedule under topological and residency constraints. It combines contiguous multi-pool allocation, spill-victim selection, explicit swap-in/swap-out insertion, and ASAP-style compression that shifts tasks earlier while respecting execution-unit availability.
results:
  zh: 项目以总执行时钟和数据搬运量为主要优化目标，获得 2025 年“华为杯”研究生数学建模竞赛全国三等奖，并整理为带有统一 CLI、冒烟测试和中英文说明的可复现代码库。
  en: With total execution cycles and data movement as the primary optimization objectives, the project won a National Third Prize in the 2025 China Postgraduate Mathematical Contest in Modeling and was reorganized into a reproducible codebase with unified CLIs, smoke tests, and bilingual documentation.
role:
  zh: 参与问题抽象、算法设计、实验验证和代码库整理，重点关注图调度与缓存管理之间的耦合。
  en: Contributed to problem abstraction, algorithm design, experimental verification, and codebase organization, with emphasis on the coupling between graph scheduling and cache management.
workflow:
  - title:
      zh: 图调度
      en: Graph scheduling
    description:
      zh: 在拓扑依赖、数据驻留和执行单元约束下，以 WCB 类评分选择就绪算子。
      en: Select ready operators with WCB-style scores under dependency, residency, and execution-unit constraints.
  - title:
      zh: 内存与 SPILL
      en: Memory and spills
    description:
      zh: 在多缓存池中分配连续地址，容量不足时选择 SPILL 对象并插入换入换出过程。
      en: Allocate contiguous regions across cache pools, select spill victims under pressure, and insert swap operations.
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
