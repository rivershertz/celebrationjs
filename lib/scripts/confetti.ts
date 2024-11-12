export class Confetti {
  private colors: string[] = ['#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f'];

  constructor() {
    window.addEventListener('click', this.triggerConfetti.bind(this));
  }

  private triggerConfetti(event: MouseEvent) {
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');

      // Set a random color for the confetti piece
      confetti.style.setProperty('--color', this.getRandomColor());

      // Set the initial position of the confetti piece at the click location
      confetti.style.left = `${event.clientX}px`;
      confetti.style.top = `${event.clientY}px`;

      // Generate random values for horizontal spread and rotation
      const randomX = (Math.random() - 0.5) * 200; // Spread confetti pieces between -100px to +100px
      const randomRotation = Math.random();

      // Apply custom CSS properties for animation
      confetti.style.setProperty('--x', randomX.toString());
      confetti.style.setProperty('--rotation', randomRotation.toString());

      // Append the confetti piece to the body
      document.body.appendChild(confetti);

      // Remove the confetti piece after the animation
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  }

  private getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
