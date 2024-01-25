const getUrl = (currency) =>
  `https://v6.exchangerate-api.com/v6/2a896feee96753caeb0f4768/latest/${currency}`;

async function getConversionRates(currency) {
  // Подготовка и отправка запроса на получения таблицы цен
  let res = await fetch(getUrl(currency), {
    method: "GET",
  });

  // Приводим в нужный формат ответ и возвращаем его
  let data = await res.json();

  // Возвращаем таблицу цен
  return data["conversion_rates"];
}

async function convert() {
  // Считываем входные значения
  const toCur = document.getElementById("toCurrency").value;
  const fromCur = document.getElementById("fromCurrency").value;
  const amount = parseFloat(document.getElementById("amount").value);

  // Запрашиваем таблицу цены валюты с которой конвертируем
  // -> RUB
  // USD -> 0.01
  // PHP -> 124
  const currencyRates = await getConversionRates(fromCur);

  // Конвертируем: Сумма исходной валюты * Цена за 1 шт этой валюты в конвертируемой
  const result = currencyRates[toCur] * amount;

  // Выводим результат
  document.getElementById("result").innerText = result.toFixed(2);
}