const view = document.querySelector('div[data-view-name="register"]');

export function showHomeView(ctx){
    ctx.render(view);
}