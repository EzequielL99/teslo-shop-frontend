import { Button } from "@/components/ui/button";

export interface Size {
    id: string;
    label: string;
}

interface Props {
    sizes: Size[];
    selectedSize: Size | null;
    onSizeSelect: (size: Size) => void;
}

export const CustomSizeSelector = ({ sizes, selectedSize, onSizeSelect }: Props) => {
    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-900">Seleccionar talla</h3>
                {selectedSize && (
                    <span className="text-sm text-slate-600">Seleccionada: {selectedSize.label}</span>
                )}
            </div>
            <div className="flex gap-3 flex-wrap">
                {sizes.map((size) => (
                    <Button
                        variant={selectedSize && selectedSize.id === size.id ? 'default' : 'outline'}
                        key={size.id}
                        onClick={() => onSizeSelect(size)}
                    >
                        {size.label}
                    </Button>
                ))}
            </div>
        </div>
    )
}
