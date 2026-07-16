import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const companyRows = [
  ['市区分公司', '1,286', '108.2%', '856', '114.1%', '72.4%', '1'],
  ['滨海分公司', '1,164', '103.5%', '768', '109.7%', '69.8%', '2'],
  ['开发区分公司', '1,039', '101.4%', '695', '106.3%', '67.1%', '3'],
  ['城南分公司', '918', '96.6%', '607', '97.2%', '64.5%', '4'],
  ['城北分公司', '847', '92.1%', '542', '90.3%', '60.8%', '5'],
]

const branchRows = [
  ['和平路支局', '286', '119.2%', '192', '121.5%', '75.8%', '1'],
  ['新港支局', '264', '113.8%', '171', '115.5%', '73.3%', '2'],
  ['高铁站支局', '248', '108.1%', '158', '109.0%', '70.6%', '3'],
  ['海河支局', '217', '96.2%', '137', '95.8%', '62.4%', '4'],
  ['天塔支局', '185', '89.4%', '115', '87.1%', '58.9%', '5'],
]

const pkRows = [
  ['市区分公司', '386', '342', '187', '915', '1'],
  ['滨海分公司', '341', '316', '162', '819', '2'],
  ['开发区分公司', '304', '278', '141', '723', '3'],
  ['城南分公司', '267', '231', '119', '617', '4'],
  ['城北分公司', '235', '207', '96', '538', '5'],
]

const growthRows = [
  ['市区分公司', '1,286', '+156', '12.1%', '856', '+112', '13.1%', '1'],
  ['滨海分公司', '1,164', '+128', '11.0%', '768', '+89', '11.6%', '2'],
  ['开发区分公司', '1,039', '+105', '10.1%', '695', '+73', '10.5%', '3'],
  ['城南分公司', '918', '+64', '7.0%', '607', '+38', '6.7%', '4'],
  ['城北分公司', '847', '+48', '5.7%', '542', '+27', '5.2%', '5'],
]

const businessRows = [
  ['市区分公司', '856', '114.1%', '386', '128.7%', '217', '108.5%', '92.4%'],
  ['滨海分公司', '768', '109.7%', '341', '117.6%', '196', '104.8%', '88.6%'],
  ['开发区分公司', '695', '106.3%', '304', '111.4%', '174', '101.2%', '86.3%'],
  ['城南分公司', '607', '97.2%', '267', '94.0%', '153', '96.8%', '81.7%'],
  ['城北分公司', '542', '90.3%', '235', '86.2%', '137', '89.2%', '76.5%'],
]

const reports = [
  { id: 'company', short: '分公司', title: '夏收行动 · 分公司进度', description: '截至今日，市区、滨海、开发区三个分公司完成进度领先，其中市区分公司完成率达 108.2%。请进度落后的单位紧盯目标差距，落实日追踪、日复盘。', metrics: [['行动完成量', '5,254'], ['平均完成率', '100.4%'], ['本日新增', '401']], headers: ['单位', '行动完成量', '完成率', '重点业务量', '完成率', '渗透率', '排名'], rows: companyRows },
  { id: 'branch', short: '分支局', title: '夏收行动 · 分支局进度', description: '和平路、新港支局保持较快推进节奏，完成率均超过 110%。各支局需聚焦网格目标，加强商机转化和重点用户触达。', metrics: [['行动完成量', '1,200'], ['平均完成率', '105.3%'], ['本日新增', '94']], headers: ['单位', '行动完成量', '完成率', '重点业务量', '完成率', '渗透率', '排名'], rows: branchRows },
  { id: 'pk', short: '积分PK', title: '当周增量积分 PK 赛', description: '本周积分 PK 进入冲刺阶段，市区分公司暂列第一。各单位请结合短板业务合理配置资源，争取在最后阶段提升积分排名。', metrics: [['累计积分', '3,612'], ['第一名积分', '915'], ['参与单位', '5']], headers: ['单位', '移动增量', '宽带增量', '重点业务', '累计积分', '排名'], rows: pkRows },
  { id: 'growth', short: '净增积分', title: '当月净增积分通报', description: '全市当月净增总体保持正向增长。市区、滨海、开发区在移动和宽带两项指标中均高于平均水平，后位单位应重点提升有效新增。', metrics: [['移动净增', '+501'], ['宽带净增', '+339'], ['环比提升', '+8.7%']], headers: ['单位', '移动存量', '移动净增', '增长率', '宽带存量', '宽带净增', '增长率', '排名'], rows: growthRows },
  { id: 'business', short: '重点业务', title: '当月重点业务通报', description: '重点业务整体完成率稳步提升。请继续围绕融合、宽带及权益类产品开展场景化营销，巩固高完成单位优势，补齐弱项业务缺口。', metrics: [['重点业务量', '3,468'], ['平均完成率', '103.5%'], ['融合渗透率', '85.1%']], headers: ['单位', '宽带发展', '完成率', '融合发展', '完成率', '权益发展', '完成率', '目标达成'], rows: businessRows },
]

function App() {
  const [active, setActive] = useState(0)
  const report = reports[active]
  return <main className="app-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="header">
      <div className="brand"><span className="brand-mark"><i /><i /><i /></span><span>CHINA TELECOM</span></div>
      <div className="headline"><span className="eyebrow">OPERATION DATA CENTER</span><h1>每日数据通报</h1></div>
      <div className="date"><span>数据截至</span><strong>07 月 16 日</strong></div>
    </header>
    <section className="content">
      <nav className="tabs" aria-label="数据类别">
        {reports.map((item, index) => <button key={item.id} className={index === active ? 'active' : ''} onClick={() => setActive(index)}><span>0{index + 1}</span>{item.short}</button>)}
      </nav>
      <div className="report-heading"><div><span className="section-code">DAILY REPORT / 0{active + 1}</span><h2>{report.title}</h2></div><span className="status"><b />数据已更新</span></div>
      <section className="metric-grid">{report.metrics.map(([label, value]) => <article className="metric" key={label}><span>{label}</span><strong>{value}</strong><em>较昨日 <b>↑</b> 持续提升</em></article>)}</section>
      <section className="table-card"><div className="table-title"><span className="pulse" />数据明细 <small>单位：户 / 项</small></div><div className="table-wrap"><table><thead><tr>{report.headers.map(x => <th key={x}>{x}</th>)}</tr></thead><tbody>{report.rows.map((row, rowIndex) => <tr key={row[0]}>{row.map((cell, i) => <td key={i} className={i === row.length - 1 ? 'rank' : (String(cell).includes('%') && Number.parseFloat(cell) >= 100 ? 'highlight' : '')}>{i === row.length - 1 ? <span className={'rank-tag rank-' + rowIndex}>{cell}</span> : cell}</td>)}</tr>)}</tbody></table></div></section>
      <section className="insight"><div className="insight-icon">i</div><div><span>通报解读</span><p>{report.description}</p></div></section>
    </section>
    <footer><span>© 中国电信 · 内部数据通报</span><span>数据口径：经营日报系统</span></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
