import { fireEvent, render, screen, waitFor, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import PortfolioRail, { RAIL_SPEED } from "./PortfolioRail";

const controls = vi.hoisted(() => ({ play: vi.fn(), stop: vi.fn(), scrollNext: vi.fn(), scrollPrev: vi.fn(), options: null as Record<string, unknown> | null }));
vi.mock("embla-carousel-auto-scroll", () => ({
  default: (options: Record<string, unknown>) => {
    controls.options = options;
    return controls;
  },
}));
vi.mock("embla-carousel-react", () => ({ default: () => [() => {}, controls] }));

beforeEach(() => {
  vi.clearAllMocks();
  controls.options = null;
  vi.stubGlobal("IntersectionObserver", class {
    constructor(private callback: (entries: { isIntersecting: boolean }[]) => void) {}
    observe() { this.callback([{ isIntersecting: true }]); }
    disconnect() {}
  });
});
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

describe("Portfolio automatic and manual movement", () => {
  it("automatically starts a visible rail and pauses during interaction", async () => {
    render(<PortfolioRail label="Design & Copy"><div>Work</div></PortfolioRail>);
    await waitFor(() => expect(controls.play).toHaveBeenCalled());
    controls.stop.mockClear();
    fireEvent.mouseEnter(screen.getByText("Work").parentElement?.parentElement as HTMLElement);
    expect(controls.stop).toHaveBeenCalled();
  });

  it("keeps the rail stopped while a work is open", () => {
    render(<PortfolioRail label="Design & Copy" paused><div>Work</div></PortfolioRail>);
    expect(controls.stop).toHaveBeenCalled();
    expect(controls.play).not.toHaveBeenCalled();
  });

  it("supports manual pause, resume and next navigation", async () => {
    render(<PortfolioRail label="Design & Copy"><div>Work</div></PortfolioRail>);
    await waitFor(() => expect(controls.play).toHaveBeenCalled());
    fireEvent.click(screen.getByRole("button", { name: "Pausar Design & Copy" }));
    expect(controls.stop).toHaveBeenCalled();
    controls.play.mockClear();
    fireEvent.click(screen.getByRole("button", { name: "Retomar Design & Copy" }));
    expect(controls.play).toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Próximo em Design & Copy" }));
    expect(controls.scrollNext).toHaveBeenCalledOnce();
  });

  it("moves faster than the default rail speed", () => {
    render(<PortfolioRail label="Design & Copy"><div>Work</div></PortfolioRail>);
    expect(controls.options).toMatchObject({ speed: RAIL_SPEED });
    expect(RAIL_SPEED).toBeGreaterThanOrEqual(1.5);
  });
});
