(self.webpackChunkatomic_swap_frontend=self.webpackChunkatomic_swap_frontend||[]).push([[252],{89252:function(e){var r=65535,o=1<<22,n=33553920;e.exports={decode:function(e){return-2147483648&e?{}:e&o?{seconds:(e&r)<<9}:{blocks:e&r}},encode:function(e){var t=e.blocks,c=e.seconds;if(void 0!==t&&void 0!==c)throw new TypeError("Cannot encode blocks AND seconds");if(void 0===t&&void 0===c)return 4294967295;if(void 0!==c){if(!Number.isFinite(c))throw new TypeError("Expected Number seconds");if(c>n)throw new TypeError("Expected Number seconds <= "+n);if(c%512!==0)throw new TypeError("Expected Number seconds as a multiple of 512");return o|c>>9}if(!Number.isFinite(t))throw new TypeError("Expected Number blocks");if(t>r)throw new TypeError("Expected Number blocks <= 65535");return t}}}}]);