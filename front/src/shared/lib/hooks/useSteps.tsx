import { useState, useCallback } from 'react';

interface UseStepsReturn {
    currentStep: number;
    nextStep: () => void;
    prevStep: () => void;
    goToStep: (step: number) => void;
    resetSteps: () => void;
    isFirstStep: boolean;
    isLastStep: boolean;
    progress: number;
}


export const useSteps = (totalSteps: number, initialStep: number = 1): UseStepsReturn => {
    const [currentStep, setCurrentStep] = useState<number>(initialStep);

    const goToStep = useCallback((step: number): void => {
        const stepNumber = Math.max(1, Math.min(step, totalSteps));
        setCurrentStep(stepNumber);
    }, [totalSteps]);

    const nextStep = useCallback((): void => {
        setCurrentStep((prev) => (prev < totalSteps ? prev + 1 : prev));
    }, [totalSteps]);

    const prevStep = useCallback((): void => {
        setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
    }, []);

    const resetSteps = useCallback((): void => {
        setCurrentStep(initialStep);
    }, [initialStep]);

    return {
        currentStep,
        nextStep,
        prevStep,
        goToStep,
        resetSteps,
        isFirstStep: currentStep === 1,
        isLastStep: currentStep === totalSteps,
        progress: (currentStep / totalSteps) * 100
    };
};