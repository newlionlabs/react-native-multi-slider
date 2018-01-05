import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface MultiSliderProps {
    values?: ReadonlyArray<number>;

    onValuesChangeStart?(): void;
    onValuesChange?(values: ReadonlyArray<number>): void;
    onValuesChangeFinish?(values: ReadonlyArray<number>): void;

    sliderLength?: number;
    touchDimensions?: {
        height?: number;
        width?: number;
        borderRadius?: number;
        slipDisplacement?: number;
    };

    customMarker?: React.ComponentClass | React.SFC;

    min?: number;
    max?: number;
    step?: number;

    optionsArray?: ReadonlyArray<number>;

    containerStyle?: StyleProp<ViewStyle>;
    trackStyle?: StyleProp<ViewStyle>;
    selectedStyle?: StyleProp<ViewStyle>;
    unselectedStyle?: StyleProp<ViewStyle>;
    markerStyle?: StyleProp<ViewStyle>;
    pressedMarkerStyle?: StyleProp<ViewStyle>;
    enabledOne?: boolean;
    enabledTwo?: boolean;
    onToggleOne?(): void;
    onToggleTwo?(): void;
    allowOverlap?: boolean;
    snapped?: boolean;
    markerOffsetX?: number;
    markerOffsetY?: number;
}

export default class MultiSlider extends React.Component<MultiSliderProps> {}
