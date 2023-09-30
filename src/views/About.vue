<script setup lang="ts">
</script>

<template>
    <main id="sobre">
        <div class="container">
            <div class="card">
                <h2>Lista de Tarefas</h2>
                <p>
                    Não deixe suas tarefas fugirem da cabeça e não serem executadas.<br>
                    Anote-as em seu novo aplicativo e fique mais tranquilo.
                </p>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>
    </main>
</template>

<style>
#sobre {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: 50vw;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    margin: 20px;
}

.card img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
}

.card h2 {
    font-size: 1.5rem;
    margin-top: 10px;
}

.card p {
    font-size: 1rem;
    margin-top: 5px;
}

.card button {
    background-color: #0f8504;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    margin-top: 10px;
    cursor: pointer;
}

.card button:hover {
    background-color: #0f8504;
}
</style>
