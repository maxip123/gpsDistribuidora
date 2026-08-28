import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Send, 
  Copy, 
  Check, 
  ShoppingBag, 
  ArrowRight,
  Package,
  AlertCircle,
  Sparkles,
  Phone
} from 'lucide-react';
import { STORE_CONFIG, PRODUCTS } from '../data/catalog';

export default function OrderDrawer({ 
  isOpen, 
  onClose, 
  orderItems, 
  onUpdateQuantity,
  onClearOrder
}) {
  const [copied, setCopied] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerBusiness, setCustomerBusiness] = useState('');

  if (!isOpen) return null;

  // Build full item objects from products
  const productMap = PRODUCTS.reduce((acc, p) => {
    acc[p.id] = p;
    return acc;
  }, {});

  const orderList = Object.entries(orderItems)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const product = productMap[id];
      if (!product) return null;
      return {
        ...product,
        orderBultos: qty,
        totalUnits: qty * product.bultoUnits,
        subtotal: qty * product.priceBulto
      };
    })
    .filter(Boolean);

  const totalBultos = orderList.reduce((sum, item) => sum + item.orderBultos, 0);
  const totalUnits = orderList.reduce((sum, item) => sum + item.totalUnits, 0);
  const totalPrice = orderList.reduce((sum, item) => sum + item.subtotal, 0);

  const minOrder = STORE_CONFIG.minOrderAmount;
  const isMinReached = totalPrice >= minOrder;
  const progressPercent = Math.min(100, Math.round((totalPrice / minOrder) * 100));

  // WhatsApp Message Generator
  const generateWhatsAppMessage = () => {
    let msg = `🛒 *PEDIDO MAYORISTA - G.P.S DISTRIBUCIONES*\n`;
    if (customerName) msg += `👤 *Cliente:* ${customerName}\n`;
    if (customerBusiness) msg += `🏬 *Comercio:* ${customerBusiness}\n`;
    msg += `------------------------------------\n\n`;

    orderList.forEach((item, index) => {
      msg += `▪️ *${item.orderBultos} Bto(s)* x ${item.name}\n`;
      msg += `   └ COD: ${item.cod} | Total ${item.totalUnits} un. | Subtotal: $${item.subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}\n`;
    });

    msg += `\n------------------------------------\n`;
    msg += `📦 *Total Bultos:* ${totalBultos}\n`;
    msg += `🔢 *Total Unidades:* ${totalUnits}\n`;
    msg += `💰 *TOTAL ESTIMADO:* $${totalPrice.toLocaleString('es-AR', { minimumFractionDigits: 2 })}\n\n`;
    msg += `Por favor confirmar disponibilidad, stock y coordinar despacho/facturación. ¡Gracias!`;

    return msg;
  };

  const handleSendWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const phoneClean = STORE_CONFIG.phone.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${phoneClean}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity" 
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-slate-200">
          
          {/* Header */}
          <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-amber-400 text-slate-950 rounded-xl">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-base tracking-tight leading-tight">
                  Tu Pedido Mayorista
                </h3>
                <p className="text-xs text-slate-400">
                  {totalBultos} {totalBultos === 1 ? 'bulto seleccionado' : 'bultos seleccionados'} ({totalUnits} un.)
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Minimum Order Indicator */}
          <div className="bg-slate-50 p-4 border-b border-slate-200">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-bold text-slate-700">Mínimo de Compra Mayorista:</span>
              <span className="font-black text-slate-900">${minOrder.toLocaleString('es-AR')}</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${
                  isMinReached ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[11px]">
              {isMinReached ? (
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3" /> ¡Alcanzaste el mínimo mayorista!
                </span>
              ) : (
                <span className="text-amber-700 font-medium">
                  Faltan ${(minOrder - totalPrice).toLocaleString('es-AR')} para el mínimo.
                </span>
              )}
              <span className="text-slate-500 font-bold">{progressPercent}%</span>
            </div>
          </div>

          {/* Customer Info (Optional for WhatsApp) */}
          <div className="px-5 py-3 bg-blue-50/50 border-b border-blue-100 flex gap-2">
            <input 
              type="text" 
              placeholder="Tu Nombre / Contacto"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-1/2 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
            />
            <input 
              type="text" 
              placeholder="Nombre del Comercio / Local"
              value={customerBusiness}
              onChange={(e) => setCustomerBusiness(e.target.value)}
              className="w-1/2 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* List of items */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {orderList.length === 0 ? (
              <div className="text-center py-16 text-slate-400">
                <Package className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                <p className="font-bold text-slate-700 text-sm">Tu lista de pedido está vacía</p>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  Agregá bultos de las ofertas para armar tu presupuesto y enviarlo por WhatsApp.
                </p>
              </div>
            ) : (
              orderList.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-xl p-3 border border-slate-200 shadow-2xs flex gap-3 items-center justify-between"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-12 h-12 object-contain rounded-lg bg-slate-50 border border-slate-100 p-1 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      {item.orderBultos} {item.orderBultos === 1 ? 'bulto' : 'bultos'} ({item.totalUnits} un.)
                    </p>
                    <p className="text-xs font-extrabold text-blue-700 mt-0.5">
                      ${item.subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1 shrink-0">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.orderBultos - 1)}
                      className="w-6 h-6 flex items-center justify-center rounded bg-white text-slate-700 hover:bg-slate-200 text-xs font-bold shadow-2xs"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-xs font-bold text-slate-800">
                      {item.orderBultos}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.orderBultos + 1)}
                      className="w-6 h-6 flex items-center justify-center rounded bg-white text-slate-700 hover:bg-slate-200 text-xs font-bold shadow-2xs"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Actions */}
          {orderList.length > 0 && (
            <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-4">
              
              {/* Subtotal summary */}
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Total Bultos:</span>
                  <span className="font-bold text-slate-900">{totalBultos}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Unidades:</span>
                  <span className="font-bold text-slate-900">{totalUnits} un.</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-slate-950 pt-2 border-t border-slate-200">
                  <span>Total Estimado:</span>
                  <span className="text-xl text-blue-700">
                    ${totalPrice.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              {/* Main Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all duration-150 shadow-md active:scale-95 cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Enviar Pedido por WhatsApp</span>
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-slate-300 text-slate-700 bg-white hover:bg-slate-100 text-xs font-bold transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copiar Detalle</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={onClearOrder}
                    className="flex items-center justify-center gap-1 py-2 px-3 rounded-xl border border-rose-200 text-rose-600 bg-rose-50 hover:bg-rose-100 text-xs font-bold transition-colors"
                    title="Vaciar pedido"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Vaciar</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
