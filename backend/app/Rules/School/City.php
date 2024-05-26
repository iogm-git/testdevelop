<?php

namespace App\Rules\School;

use Illuminate\Contracts\Validation\Rule;

class City implements Rule
{
    protected string $province;

    /**
     * Create a new rule instance.
     *
     * @param  string|null  $province
     * @return void
     */
    public function __construct(?string $province)
    {
        $this->province = $province ?? '';
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value): bool
    {
        return !empty($this->province) && in_array($value, config('province.all')[$this->province]);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message(): string
    {
        return 'City not found.';
    }
}
