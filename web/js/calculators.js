// Calculadoras cuantitativas e interactivas para el Trading Hub
window.TradingCalculators = {
  // 1. Calculadora de Position Sizing & Apalancamiento Real
  calculatePositionSize(capital, riskPct, entry, stopLoss) {
    if (!capital || !riskPct || !entry || !stopLoss || entry <= 0 || stopLoss <= 0) {
      return null;
    }
    const slDist = Math.abs(entry - stopLoss);
    if (slDist === 0) return null;

    const riskAmount = capital * (riskPct / 100);
    const slPct = (slDist / entry) * 100;
    const units = riskAmount / slDist;
    const notionalSize = units * entry;
    const effectiveLeverage = notionalSize / capital;

    let leverageStatus = "safe";
    let statusText = "Apalancamiento Bajo / Seguro";
    if (effectiveLeverage > 7) {
      leverageStatus = "danger";
      statusText = "PELIGRO: Sobreapalancamiento extremo (>7x)";
    } else if (effectiveLeverage > 3) {
      leverageStatus = "warning";
      statusText = "Moderado (3x - 7x) - Vigilar margen";
    }

    return {
      capital,
      riskAmount: riskAmount.toFixed(2),
      slDist: slDist.toFixed(4),
      slPct: slPct.toFixed(2),
      units: units.toFixed(4),
      notionalSize: notionalSize.toFixed(2),
      effectiveLeverage: effectiveLeverage.toFixed(2),
      leverageStatus,
      statusText
    };
  },

  // 2. Calculadora de Breakeven Real con Comisiones Round-Trip y Slippage
  calculateBreakeven(entry, feePct = 0.06, slippagePct = 0.04) {
    if (!entry || entry <= 0) return null;

    // Comisión round trip = entrada + salida (2 * feePct)
    const totalFeePct = (feePct * 2) / 100;
    const slipFactor = (slippagePct * 2) / 100;
    const totalCushionPct = totalFeePct + slipFactor;

    const longBE = entry * (1 + totalCushionPct);
    const shortBE = entry * (1 - totalCushionPct);
    const cushionCostLong = longBE - entry;

    return {
      entry,
      feeRoundTripPct: (totalFeePct * 100).toFixed(3),
      totalCushionPct: (totalCushionPct * 100).toFixed(3),
      cushionCostLong: cushionCostLong.toFixed(4),
      longBreakeven: longBE.toFixed(4),
      shortBreakeven: shortBE.toFixed(4)
    };
  },

  // 3. Calculadora de Esperanza Matemática
  calculateExpectancy(winRatePct, rrRatio, riskAmount = 100) {
    if (!winRatePct || !rrRatio || winRatePct < 0 || winRatePct > 100) return null;

    const winRate = winRatePct / 100;
    const lossRate = 1 - winRate;
    const winAmount = riskAmount * rrRatio;
    const lossAmount = riskAmount;

    const expectancy = (winRate * winAmount) - (lossRate * lossAmount);
    const projection50 = expectancy * 50;
    const projection100 = expectancy * 100;

    return {
      winRatePct,
      lossRatePct: (lossRate * 100).toFixed(1),
      rrRatio: rrRatio.toFixed(2),
      winAmount: winAmount.toFixed(2),
      lossAmount: lossAmount.toFixed(2),
      expectancy: expectancy.toFixed(2),
      isPositive: expectancy > 0,
      projection50: projection50.toFixed(2),
      projection100: projection100.toFixed(2)
    };
  }
};
