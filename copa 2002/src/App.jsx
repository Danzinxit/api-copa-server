import { useState } from 'react'
import './App.css'
import TournamentBracket from './components/TournamentBracket'
import Card from './components/Card'

function App({ setToken }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };
  const [ activeTab, setActiveTab ] = useState('Tab 1')

  function handleChangeTab(tabName) {
    setActiveTab(tabName)
  }

  function renderTabContent() {
    switch(activeTab) {
      case 'Tab 1':
        return <TournamentBracket fase='finais' />
      case 'Tab 2':
        return <TournamentBracket fase='semifinais' />
      case 'Tab 3':
        return <TournamentBracket fase='quartas' />
      case 'Tab 4':
        return <TournamentBracket fase='oitavas' />
      case 'Tab 5':
        return <section className='cards'><Card /></section>
    }
  }

  return (
    <>
      <h1 className='textocopa'>Copa do Mundo 2002</h1>
      <button onClick={handleLogout}>Logout</button>
      <section className='knockout_table'>
        
        <div className='tabs'>
          <button
            className={ activeTab === 'Tab 1' ? 'active' : '' }
            onClick={() => handleChangeTab('Tab 1')}
          >
            Finais
          </button>
          <button
            className={ activeTab === 'Tab 2' ? 'active' : '' }
            onClick={() => handleChangeTab('Tab 2')}
          >
            Semi-finais
          </button>
          <button
            className={ activeTab === 'Tab 3' ? 'active' : '' }
            onClick={() => handleChangeTab('Tab 3')}
          >
            Quartas-Finais
          </button>
          <button
            className={ activeTab === 'Tab 4' ? 'active' : '' }
            onClick={() => handleChangeTab('Tab 4')}
          >
            Oitavas-Finais
          </button>
          <button
            className={ activeTab === 'Tab 5' ? 'active' : '' }
            onClick={() => handleChangeTab('Tab 5')}
          >
            Grupos
          </button>
        </div>

        <div className='tab_content'>
          { renderTabContent() }
        </div>

      </section>

    </>
  )
}

export default App