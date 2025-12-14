function renderSkillsChart() {
  const chart = echarts.init(document.getElementById('skills-hist'));
  chart.setOption({
    title: { text: 'Мои навыки' },
    xAxis: { type: 'value' },
    yAxis: {
      type: 'category',
      data: ['SQL', 'Modus',  'PIX BI']
    },
    series: [{
      type: 'bar',
      data: [3, 5, 8]
    }]
  });
}

renderSkillsChart();


function renderTechSunburst() {
  const chart = echarts.init(document.getElementById('tech-sunburst'));

  const option = {
    title: {
      text: 'Мой BI-стек',
      left: 'center',
      top: 20,
      textStyle: { fontSize: 20 }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%'
    },
    series: {
      type: 'sunburst',
      radius: [40, '85%'],
      sort: null,
      levels: [
        {}, // уровень 0 — центр (не используется)
        {
          // уровень 1 — категории
          itemStyle: {
            color: '#5470c6',
            borderRadius: 4,
            borderWidth: 2,
            borderColor: '#fff'
          },
          label: {
            rotate: 'tangential',
            fontSize: 14,
            fontWeight: 'bold'
          }
        },
        {
          // уровень 2 — конкретные технологии
          itemStyle: {
            color: '#91cc75',
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#eee'
          },
          label: {
            rotate: 'radial',
            fontSize: 12
          }
        }
      ],
      data: [
        {
          name: 'Базы данных',
          value: 100,
          children: [
            { name: 'PostgreSQL', value: 55 },
            { name: 'ClickHouse', value: 45 }
          ]
        },
        {
          name: 'BI-инструменты',
          value: 100,
          children: [
            { name: 'Modus', value: 60 },
            { name: 'PIX BI', value: 40 }
          ]
        },
        {
          name: 'Языки',
          value: 100,
          children: [
            { name: 'SQL', value: 60 },
            { name: 'JS', value: 25 },
            { name: 'Python', value: 15 }
          ]
        },
        {
          name: 'Визуализации',
          value: 100,
          children: [
            { name: 'ECharts', value: 70 },
            { name: 'Highcharts', value: 30 }
          ]
        },
        {
          name: 'DevOps',
          value: 100,
          children: [
            { name: 'Linux', value: 60 },
            { name: 'Apache Airflow', value: 40 }
          ]
        }
      ]
    }
  };

  chart.setOption(option);

  window.addEventListener('resize', () => chart.resize());
}

document.addEventListener('DOMContentLoaded', () => {
  renderTechSunburst();
});