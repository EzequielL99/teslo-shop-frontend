import { useState } from "react";
import { Heart, RotateCcw, Shield, ShoppingCart, Truck } from "lucide-react"
import { CustomSizeSelector, type Size } from "@/shop/components/CustomSizeSelector";
import ImageBlackJacket from '../../../assets/product-black-jacket.jpg'
import { Button } from "@/components/ui/button";

const sizes = [
    { id: "xs", label: "XS" },
    { id: "s", label: "S" },
    { id: "m", label: "M" },
    { id: "l", label: "L" },
    { id: "xl", label: "XL" },
    { id: "xxl", label: "XXL" },
];

export const ProductPage = () => {
    const [selectedSize, setSelectedSize] = useState<Size | null>(null);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddToCart = () => {
        console.log('ADD TO CART');
    }

    const handleBuyNow = () => {
        console.log('BUY NOW');
    }

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        {/* <ImageGallery images={product.images} productName={product.name} /> */}
                        <img className="w-full" src={ImageBlackJacket} alt="Product" />
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
                                Producto
                            </h1>
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-bold text-slate-900">
                                    $9.99
                                </span>
                            </div>
                        </div>

                        <div className="border-t border-slate-200 pt-6">
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Descripcion del producto
                            </p>
                        </div>

                        {/* Talla */}
                        <div className="border-t border-slate-200 pt-6">
                            <CustomSizeSelector
                                sizes={sizes}
                                selectedSize={selectedSize}
                                onSizeSelect={setSelectedSize}
                            />
                        </div>

                        {!selectedSize && (
                            <p className="text-sm text-amber-600 bg-amber-50 px-4 py-2 rounded-lg">
                                Selecciona una talla para continuar
                            </p>
                        )}

                        {/* CTAs */}
                        <div className="flex gap-4 pt-4">
                            <Button
                                onClick={handleBuyNow}
                                disabled={!selectedSize}
                                className="flex flex-1 h-auto py-4"
                                variant='default'
                            >
                                Buy Now
                            </Button>
                            <Button
                                variant='outline'
                                onClick={() => setIsFavorite(!isFavorite)}
                                aria-label="Agregar a favoritos"
                                size='icon'
                                className="px-6 h-auto"
                            >
                                <Heart className={`size-5 ${isFavorite ? 'fill-current' : ''}`} />
                            </Button>
                        </div>



                        {/* Beneficios */}
                        <div className="border-t border-slate-200 pt-6 space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <Truck className="w-5 h-5 text-slate-700" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-slate-900">Envío gratis</h4>
                                    <p className="text-sm text-slate-600">En ordenes superior a $50</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <RotateCcw className="w-5 h-5 text-slate-700" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-slate-900">Devolución fácil</h4>
                                    <p className="text-sm text-slate-600">Política de devolución de 30 días</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <Shield className="w-5 h-5 text-slate-700" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-slate-900">Pago seguro</h4>
                                    <p className="text-sm text-slate-600">Transacciones 100% seguras</p>
                                </div>
                            </div>
                        </div>

                        {/* Detalles del producto */}
                        <div className="border-t border-slate-200 pt-6">
                            <h3 className="font-medium text-slate-900 mb-3">Detalle del producto</h3>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex gap-2">
                                    <span className="text-slate-400">•</span>
                                    100% Algodón Premium
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-slate-400">•</span>
                                    Pre-shrunk fabric
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-slate-400">•</span>
                                    Ajuste eslatizado cómodo
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-slate-400">•</span>
                                    Lavado a máquina
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
