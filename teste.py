import ollama

# Fazendo uma chamada simples
response = ollama.chat(
    model="llama2",
    messages=[{"role": "user", "content": "Explique o que é Python em poucas palavras"}]
)

print(response["message"]["content"])
