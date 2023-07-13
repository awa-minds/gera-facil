export const GA_TRACKING_ID = 'G-4M7FX549LS' // Substitua pelo seu código de rastreamento

// Função para enviar a página visualizada para o Google Analytics
export const pageview = (url: string) => {
  ;(window as any).gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
