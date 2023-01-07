import Forecast from './components/Forecast'
import Search from './components/Search'

import useForecast from './hooks/useForecast'

const App = (): JSX.Element => {
    const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
        useForecast()

    return (
        <main className="flex justify-center items-center bg-gradient-to-bl from-orange-400 via-amber-400 to-pink-500 h-[100vh] w-full">
            {forecast ? (
                <Forecast data={forecast} />
            ) : (
                <Search
                    term={term}
                    options={options}
                    onInputChange={onInputChange}
                    onOptionSelect={onOptionSelect}
                    onSubmit={onSubmit}
                />
            )}
        </main>
    )
}

export default App