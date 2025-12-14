function renderSkillsChart() {
  const chart = echarts.init(document.getElementById('skills-chart'));
  chart.setOption({
    title: { text: 'Мои навыки' },
    xAxis: { type: 'value' },
    yAxis: {
      type: 'category',
      data: ['PIX BI', 'SQL', 'Modus']
    },
    series: [{
      type: 'bar',
      data: [8, 5, 3]
    }]
  });
}

renderSkillsChart();
